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

export async function deleteBread(teamId){
  await axios.delete(`/api/myteam/${teamId}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/bread')
}

export async function Fixtures(){
  const res = await axios.get('/rest/fixtures/?future=1')
  return res.data
}