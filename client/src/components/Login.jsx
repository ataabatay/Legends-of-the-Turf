import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from '../../utils/helpers/common'




export default function Login() {
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 202) {
      setToken(res.data.token)
      navigate('/Home')
    }
  }, [res, navigate])
  return (
    
      
    <div className='login-container' >
    <Form className="login-form" method="POST">
    <p class="login-title display-6 mb-8">Login</p>
      <div class="form-group">
        <input type="email" class="form-control" id="email" name="email" placeholder='Email' placeholder="Your email" />
        </div>
        <div class="form-group">
        <input className="input" type="password" class="form-control" id="password" name="password" placeholder="Password" />
        <button className='btn btn-outline-primary btn-md m-4'  type="submit">Login</button>
        {res && <p class='danger'>{res.data.message}</p>}
        </div >
    </Form>
    </div>

)
}

