

//fetch userteam from database

export async function getMyTeam(teamId){
  const res = await fetch(`http://localhost:3000/api/myteam/${teamId}`)
  return res.json()
}

//fetch all players
export async function getAllPlayers(){
  const res = await fetch('http://localhost:3000/api/players')
  return res.json()
}

export async function  getSinglePlayer(id){
  const res = await fetch(`http://localhost:3000/api/players/${id}`)
  return res.json()
}

