import axios from 'axios'
import { redirect } from 'react-router-dom'
import { getToken, formToObj } from '../helpers/common'

//need to define auth token 
export async function deleteTeam(teamId){
  await axios.delete(`/api/myteam/${teamId}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/myteam/newteam')
}

export async function editTeam(request, teamId){
  console.log(request)
  const data = await formToObj(request)
  console.log(data)
  return await axios.put(`/api/myteam/${teamId}/edit/players`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function createTeam(request){
  console.log(request)
  const data = await formToObj(request)
  console.log(data)
  return await axios.post('/api/myteam/newteam', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}