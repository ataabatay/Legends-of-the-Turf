import express from 'express'
import { 
  addPlayers, 
  changeTeamDetails, 
  createTeam, 
  getAllPlayers, 
  getMyTeam, 
  getSinglePlayer, 
  makeTransfers } from '../controllers/footballers.js'
// import login and register from user controllers when ready
// import secure route when ready

const router = express.Router()

router.route('/myteam/newteam')
  .post(createTeam)

router.route('/players')
  .get(getAllPlayers)

router.route('/myteam/newteam/playerselection')
  .put(addPlayers)

//optional
router.route('/myteam/:teamId')
  .get(getMyTeam)
  .put(changeTeamDetails)

router.route('/myteam/:teamId/swapplayers')
  .put(makeTransfers)

router.route('/players/:playerId')
  .get(getSinglePlayer)

export default router