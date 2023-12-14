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
    <p className="login-title display-6 mb-8">Login</p>
      <div className="form-group">
        <input type="email" className="form-control" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
        <input className="input form-control" type="password" id="password" name="password" placeholder="Password" />
        <button className='btn btn-outline-primary btn-md m-4'  type="submit">Login</button>
        {res && <p className='danger'>{res.data.message}</p>}
        </div >
    </Form>
    </div>

)
}

