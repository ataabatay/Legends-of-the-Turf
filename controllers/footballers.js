import Footballer from '../models/footballer'
import Team from '../models/team'
import mongoose from 'mongoose'

// *Create new team - XXX
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  console.log('Create team')
  return res.status(200).json({message: 'Success'})
}

// *Fetch all the players - DONE
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Footballer.find()
    return res.status(200).json(allPlayers)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Add players to a team - XXX
// Method: PUT
// Path: 'myteam/newteam/playerselection
export const addPlayers = async (req, res) => {
  console.log('Add players')
  return res.status(200).json({message: 'Success'})
}

// *Fetch my team - XXX
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  console.log('Get my team')
  return res.status(200).json({message: 'Success'})
}

// *Fetch single player - DONE
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
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
}

// ! Optionals 
// *Update team details (change team name/logo etc.) - XXX
// Method: PUT
// Path: '/myteam/:teamId
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}

// *Update team (selection of players) - XXX
// Method: PUT
// Path: '/myteam/:teamId
export const makeTransfers = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}