import express from 'express'
import {
  addPlayersToTeam,
  changeTeamDetails,
  createTeam,
  getAllPlayers,
  getMyTeam,
  getSinglePlayer,
  getAllTeams,
  deleteTeam
} from '../controllers/footballers.js'

import {
  login,
  register,
  getProfile
} from '../controllers/users.js'

import secureRoute from './secureRoute.js'

const router = express.Router()

router.route('/myteam/newteam')
  .post(secureRoute, createTeam)

router.route('/players')
  .get(getAllPlayers)

router.route('/myteam/:teamId/edit/players')
  .put(secureRoute, addPlayersToTeam)

router.route('/myteam/:teamId/edit/details')
  .put(secureRoute, changeTeamDetails)

router.route('/myteam/:teamId')
  .get(getMyTeam)
  .delete(secureRoute, deleteTeam)

router.route('/players/:playerId')
  .get(getSinglePlayer)

router.route('/teams')
  .get(getAllTeams)

router.route('/register')
  .post(register)

router.route('/login')
  .post(login)

// User
router.route('/profile')
  .get(secureRoute, getProfile)

export default router