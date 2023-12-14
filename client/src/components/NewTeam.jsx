
import { useState, useEffect } from 'react'
import ImageUploadField from './ImageUploadField'
import { useNavigate, useActionData, Form } from 'react-router-dom'

export default function NewTeam() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(res)
    if (res?.status === 201) {
      navigate(`/myteam/${res.data._id}/edit/players`)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    teamName: '',
    image: '',
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    
    <div className='create-team'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '20px' }}>
        <Form className="create-form" method="POST" >
        <p className="login-title display-6 mb-8">Create Your Team</p>
        <ImageUploadField  value={formData.image} formData={formData} setFormData={setFormData} />
          <input className="upload" type="text" name="teamName" placeholder='Team Name' onChange={handleChange} value={formData.teamName}  />
          <button className='btn btn-outline-primary btn-md m-4' type="submit" value="Create Team" >Create Team</button>
        </Form>
      </div>
      </div>
  )
}