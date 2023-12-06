import Footballer from '../models/footballer.js'
import Team from '../models/team.js'
import mongoose from 'mongoose'

// *Create new team - working
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  console.log('Create team')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch all the players - working
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
  try {
    const footballers = await Footballer.find()
    return res.status(200).json(footballers)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Add/edit players in a team - working
// Method: PUT
// Path: 'myteam/:teamId/edit/players'
export const addPlayersToTeam = async (req, res) => {
  console.log('Add players')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch my team - working
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  console.log('Get my team')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch single player
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
  const footballerId = req.params.playerId
  const footballerToFind = await Footballer.findById(footballerId)
  return res.status(200).json(footballerToFind)
}

// ! Optionals
// *Update team details (change team name/logo etc.) - working
// Method: PUT
// Path: '/myteam/:teamId/edit/details'
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}