import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})



// Whenever the user collection is queried and a user document is converted to JSON, we will remove the password from the response
userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
  },
})

userSchema
  .virtual('teamsCreated', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'owner',
  })

//virtual field is not stored in mongo db can be used for validation 
userSchema.virtual('passwordConfirmation')
  .set(function (value) {
    // value holds the value of passwordConfirmation or req.body.passwordConfirmation
    this._passwordConfirmation = value
    //setter is similar to useeffect  only it tracks a virtual field
  })


//pre validate
//for custom validation 
userSchema.pre('validate', function (next) {
  // ismodifed passwords esures this only relates to password
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.validate('passwordConfirmation', 'make sure passwords match')
  }

  next()
})

//bcrypt is used to hash pasword
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})

//assign schema to model
//this always comes last as it creates copy of schema

export default mongoose.model('User', userSchema)