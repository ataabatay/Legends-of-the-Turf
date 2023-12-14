import mongoose from 'mongoose'

const footballerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  teamName: { type: String, required: true },
  position: { type: String, required: true },
  price: { type: Number, required: true },
  totalPoints: {type: Number},
  publicId: {type: Number, required: true},
})

export default mongoose.model('Footballer', footballerSchema)