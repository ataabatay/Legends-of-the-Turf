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
  .delete(deleteTeam)

router.route('/players/:playerId')
  .get(getSinglePlayer)

router.route('/teams')
  .get(getAllTeams)

export default router