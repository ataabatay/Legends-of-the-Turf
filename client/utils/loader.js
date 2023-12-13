import axios from "axios"
//fetch userteam from database
import {activeUser, getToken} from "./helpers/common.js"

export async function getMyTeam(teamId){
  const res = await fetch(`/api/myteam/${teamId}`)
  return res.json()
}

export async function  getSinglePlayer(id){
  const res = await fetch(`/api/players/${id}`)
  return res.json()
}

export async function getAllPlayers(){
  const res = await fetch('/api/players')
  return res.json()
}

// export async function getAllPlayersAndUserTeam(teamId){
//   const [ playersRes, userTeamRes ] = await Promise.all([
//     axios.get('/api/players'),
//     axios.get(`/api/myteam/${teamId}`)
//   ])
//   return {
//     allPlayers: playersRes.data,
//     userTeam: userTeamRes.data
//   }
// }

export async function getAllFootballers() {
  const playersFromThirdParty = await axios.get('/rest/bootstrap-static/')
  return playersFromThirdParty
}

export async function FixturesAndLeagueTable(){
  const [ fixturesRes, teamsRes, leagueRes ] = await Promise.all([
    axios.get('/rest/fixtures/?future=1'),
    axios.get('/rest/bootstrap-static/'), 
    axios.get('/plt/fixtures/league-table?entryId=30EGwHPO9uwBCc75RQY6kg')
  ])
  return {
    fixtures: fixturesRes.data,
    teams: teamsRes.data.teams,
    leagueTable: leagueRes.data,
  }
}
