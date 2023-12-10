import axios from 'axios'
import { redirect } from 'react-router-dom'

export async function deleteTeam(teamId){
  await axios.delete(`/api/myteam/${teamId}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/myteam/newteam')
}