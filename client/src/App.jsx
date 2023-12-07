import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'


import Home from './components/Home'
import Navigation from './components/Nav'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Home />
      
      
    
      <h1>Hello turds</h1>
      <button>Login</button>
      {/* <Link to="/login" className='btn btn-blue'>Login</Link> */}
      <button>Register</button>
      {/* <Link to="/register" className='btn btn-blue'>Register</Link> */}
      {/* <main>
      <Outlet />
      </main> */}
      
    </>
  )
}

export default App
