import express from 'express'
import {
  addPlayersToTeam,
  changeTeamDetails,
  createTeam,
  getAllPlayers,
  getMyTeam,
  getSinglePlayer,
  getAllTeams,
} from '../controllers/footballers.js'

import {
  login,
  register
} from '../controllers/users.js'
// import login and register from user controllers when ready
// import secure route when ready

const router = express.Router()

router.route('/myteam/newteam')
  .post(createTeam)

router.route('/players')
  .get(getAllPlayers)

router.route('/myteam/:teamId/edit/players')
  .put(addPlayersToTeam)

router.route('/myteam/:teamId/edit/details')
  .put(changeTeamDetails)

router.route('/myteam/:teamId')
  .get(getMyTeam)

router.route('/players/:playerId')
  .get(getSinglePlayer)

router.route('/teams')
  .get(getAllTeams)

router.route('/register')
  .post(register)

router.route('/login')
  .post( login)

export default router