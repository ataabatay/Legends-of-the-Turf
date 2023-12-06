import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  players: [],
})

export default mongoose.model('Team', teamSchema)