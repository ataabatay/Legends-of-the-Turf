import './App.css'

import Navigation from './components/Nav'
import { Outlet, useLocation } from 'react-router-dom'

export default function App() {

<<<<<<< HEAD
  const currentPage = useLocation().pathname

  return (
    <>
      {currentPage !== '/' ? 
      <>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </>
      :
      <>
        <h1>Hello turds</h1>
        <button>Login</button>
        <button>Register</button>
      </>
      }
=======

function App() {
  

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
      
>>>>>>> development
    </>
  )
}


