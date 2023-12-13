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
  const data = await formToObj(request)
  return await axios.put(`/myteam/${teamId}/edit/players`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function createTeam(request){
  const data = await formToObj(request)
  return await axios.post('/api/myteam/newteam', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}