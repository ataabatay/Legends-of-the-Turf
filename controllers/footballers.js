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
  console.log('Get all players')
  return res.status(200).json({ message: 'Success' })
}

// *Add players to a team - working
// Method: PUT
// Path: 'myteam/newteam/playerselection
export const addPlayers = async (req, res) => {
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

// *Fetch single player - working
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}

// ! Optionals 
// *Update team details (change team name/logo etc.) - working
// Method: PUT
// Path: '/myteam/:teamId
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}

// *Update team (selection of players) - working
// Method: PUT
// Path: '/myteam/:teamId/swapplayers
export const makeTransfers = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}