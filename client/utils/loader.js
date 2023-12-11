import axios from 'axios'

//fetch userteam from database

export async function getMyTeam(teamId){
  const res = await fetch(`/api/myteam/${teamId}`)
  return res.json()
}

//fetch all players
export async function getAllPlayers(){
  const res = await fetch('/api/players')
  return res.json()
}

export async function  getSinglePlayer(id){
  const res = await fetch(`/api/players/${id}`)
  return res.json()
}


export async function Fixtures(){
  const [ fixturesRes, teamsRes ] = await Promise.all([
    axios.get('/rest/fixtures/?future=1'),
    axios.get('rest/bootstrap-static/') ])
  return {
    fixtures: fixturesRes.data,
    teams: teamsRes.data.teams
  }
}

export async function LeagueTable(){
  const res = await axios.get('/plt/fixtures/league-table?entryId=30EGwHPO9uwBCc75RQY6kg')
  return res.data
}