import { useState } from 'react'
import ImageUploadField from './components/ImageUploadField'

export default function NewTeam() {
  const [ formData, setFormData ] = useState({
    teamName: '',
    image: '',
  })


function handleChange(e){
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

  return (
  <form onSubmit={e => e.preventDefault()}>
    <input type="text" name="teamName" placeholder='Team Name' onChange={handleChange} value={formData.teamName}/>
    <ImageUploadField setFormData={setFormData} formData={formData} />
    <input type="submit" value="Upload Team Logo" />
  </form>
)
}