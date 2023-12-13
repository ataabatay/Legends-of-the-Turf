import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  players: [{ type: mongoose.ObjectId, ref: 'Footballer' }],
  owner: { type: mongoose.ObjectId, ref: 'User', required: true },
  image: {type: String},
})

export default mongoose.model('Team', teamSchema)