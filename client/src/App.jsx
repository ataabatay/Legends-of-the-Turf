import './App.css'

import Navigation from './components/Nav'
import {Home, Outlet, useLocation } from 'react-router-dom'

export default function App() {

  

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