import mongoose from 'mongoose'

const footballerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  teamName: { type: String, required: true },
  position: { type: String, required: true },
  DOB: { type: String },
  height: { type: String },
  price: { type: Number, required: true },
})

export default mongoose.model(footballerSchema)