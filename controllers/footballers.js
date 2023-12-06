import Footballer from '../models/footballer'
import Team from '../models/team'
import mongoose from 'mongoose'

// *Create new team - XXX
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  console.log('Create team')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch all the players - DONE
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
  console.log('Get all players')
  return res.status(200).json({message: 'Success'})
}

// *Add players to a team - XXX
// Method: PUT
// Path: 'myteam/newteam/playerselection
export const addPlayers = async (req, res) => {
  console.log('Add players')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch my team - XXX
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  console.log('Get my team')
  return res.status(200).json({ message: 'Success' })
}

// *Fetch single player - DONE
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}

// ! Optionals 
// *Update team details (change team name/logo etc.) - XXX
// Method: PUT
// Path: '/myteam/:teamId
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}

// *Update team (selection of players) - XXX
// Method: PUT
// Path: '/myteam/:teamId
export const makeTransfers = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
}