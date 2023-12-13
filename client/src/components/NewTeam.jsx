
import { useState, useEffect } from 'react'
import ImageUploadField from './ImageUploadField'
import { useNavigate, useActionData, Form } from 'react-router-dom'

export default function NewTeam() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {

    console.log(res)
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/myteam/${res.data._id}/edit/players`)
    }
  }, [res, navigate])

  const [formData, setFormData] = useState({
    teamName: '',
    image: '',
  })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Create Your Team</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '20px' }}>
        <Form method="POST" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '20px', maxWidth: '400px' }}>
          <input type="text" name="teamName" placeholder='Team Name' onChange={handleChange} value={formData.teamName} style={{ margin: '5px', padding: '10px', width: '100%', boxSizing: 'border-box' }} />
          {/* <ImageUploadField setFormData={setFormData} formData={formData} /> */}
          <ImageUploadField value={formData.image} onChange={handleChange} formData={formData} setFormData={setFormData} />
          <input type="submit" value="Create Team" style={{ margin: '10px', padding: '10px', cursor: 'pointer', backgroundColor: 'royalblue', color: 'white', border: 'none', borderRadius: '5px' }} />
        </Form>
      </div>
    </>
  )
}