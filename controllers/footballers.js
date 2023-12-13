import Footballer from '../models/footballer.js'
import Team from '../models/team.js'
import mongoose from 'mongoose'

// *Create new team - working
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const teamToCreate = await Team.create(req.body)
    return res.status(201).json(teamToCreate)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Fetch all the players - working
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Footballer.find()
    console.log(allPlayers)
    return res.status(200).json(allPlayers)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Add/edit players in a team - working
// Method: PUT
// Path: 'myteam/:teamId/edit/players'
export const addPlayersToTeam = async (req, res) => {
  try {
    const teamToEdit = await Team.findById(req.params.teamId)
    const playersToAdd = req.body
    Object.assign(teamToEdit, playersToAdd)
    await teamToEdit.save()
    return res.status(200).json(teamToEdit)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// *Fetch my team - working
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  try {
    const teamToFetch = await Team.findById(req.params.teamId).populate('players')
    if (!teamToFetch) return res.status(404).json({ message: 'Team not found' })
    return res.status(200).json(teamToFetch)
  } catch (error) {
    return res.status(400).json(error)
  }
}

// *Fetch single player
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
  try {
    // find the footballer by the id provided in the params 
    const footballer = await Footballer.findById(req.params.playerId)
    // if can't find the footballer by id return not found error
    if (!footballer) return res.status(401).json({ message: 'Footballer not found!' })
    // else return succes and the footballer with the details
    return res.status(200).json(footballer)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

//Delete teams
//METHOD: Delete
// Path: '/myteam/:teamId'
export const deleteTeam = async (req, res) => {
  try {
    const { teamId } = req.params
    const team = await Team.findByIdAndDelete(teamId)
    if (!team) {
      return res.status(404).json({ message: 'Team not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}


// ! Optionals
// *Update team details (change team name/logo etc.) - working
// Method: PUT
// Path: '/myteam/:teamId/edit/details'
export const changeTeamDetails = async (req, res) => {
  try {
    const teamToEdit = await Team.findById(req.params.teamId)
    if (!teamToEdit) return res.status(404).json({ message: 'Team not found' })

    //* TO ADD: validation to match owner is same as current user to allow changes
    Object.assign(teamToEdit, req.body)
    await teamToEdit.save()
    return res.status(200).json(teamToEdit)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Get all teams
// Method: GET
// Path: '/teams'
export const getAllTeams = async (req, res) => {
  try {
    const allTeams = await Team.find()
    return res.status(200).json(allTeams)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}