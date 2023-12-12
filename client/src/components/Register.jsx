import {Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function Register(){
  const res = useActionData()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])
  return (
    <div className="register-container">
      <Form  className='form' method="POST">
      <h1 className="text-center bold display-6 mb-4">Register</h1>
      <div class="input-group">
        <input type="text" name="first-name" placeholder='First Name' />
        </div>
        <div class="input-group">
        <input type="text" name="last-name" placeholder='Last Name' />
        </div>
        <div class="input-group">
        <input type="text" name="username" placeholder='Username' />
        </div>
        <div class="input-group">
        <input type="email" name="email" placeholder='Email' />
        </div>
        <div class="input-group">
        <input type="password" name="password" placeholder='Password' />
        </div>
        <div class="input-group">
        <input type="password" name="passwordConfirmation" placeholder='Confirm password' />
        </div>
        <button class='btn btn-outline-primary btn-md m-4'  type="submit">Register</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
    </div>
  )
}