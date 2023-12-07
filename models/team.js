import mongoose from 'mongoose'

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  players: [ {type: mongoose.ObjectId, ref:'Footballer'} ],
})

export default mongoose.model('Team', teamSchema)