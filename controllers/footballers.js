import Footballer from '../models/footballer.js'
import Team from '../models/team.js'
import mongoose from 'mongoose'

// *Create new team - working
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  console.log('Create team')
  return res.status(200).json({message: 'Success'})
}

// *Fetch all the players - working
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
<<<<<<< HEAD
  try {
    const allPlayers = await Footballer.find()
    return res.status(200).json(allPlayers)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
=======
  console.log('Get all players')
  return res.status(200).json({ message: 'Success' })
>>>>>>> ff75630677bc0114adc75942b13e2cfb525c7de8
}

// *Add players to a team - working
// Method: PUT
// Path: 'myteam/newteam/playerselection
export const addPlayers = async (req, res) => {
  console.log('Add players')
  return res.status(200).json({message: 'Success'})
}

// *Fetch my team - working
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  console.log('Get my team')
  return res.status(200).json({message: 'Success'})
}

// *Fetch single player - working
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
<<<<<<< HEAD
  try {
    // find the footballer by the id provided in the params 
    const footballer = await Footballer.findById(req.params.playerId)
    // if can't find the footballer by id return not found error
    if (!footballer) return res.status(401).json({message: 'Footballer not found!'})
    // else return succes and the footballer with the details
    return res.status(200).json(footballer)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
=======
  console.log('Get single player')
  return res.status(200).json({ message: 'Success' })
>>>>>>> ff75630677bc0114adc75942b13e2cfb525c7de8
}

// ! Optionals 
// *Update team details (change team name/logo etc.) - working
// Method: PUT
// Path: '/myteam/:teamId
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}

// *Update team (selection of players) - working
// Method: PUT
// Path: '/myteam/:teamId/swapplayers
export const makeTransfers = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}