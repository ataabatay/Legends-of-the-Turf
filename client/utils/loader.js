

//fetch userteam from database

export async function getMyTeam(_Id){
  const res = await fetch(`/api/myteam/${_Id}`)
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

