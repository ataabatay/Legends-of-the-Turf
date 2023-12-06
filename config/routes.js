import express from 'express'
import { addPlayers, changeTeamDetails, createTeam, getAllPlayers, getMyTeam, getSinglePlayer, makeTransfers } from '../controllers/footballers'


const router = express.Router()

router.route('/myteam/newteam')
  .post(createTeam)

router.route('/players')
  .get(getAllPlayers)

router.route('/myteam/newteam/playerselection')
  .put(addPlayers)

router.route('/myteam/:teamId')
  .get(getMyTeam)
  //optional
  .put(changeTeamDetails)
  .put(makeTransfers)

router.route('/players/:playerId')
  .get(getSinglePlayer)

export default router