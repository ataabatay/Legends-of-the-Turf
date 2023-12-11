import './App.css'
import Navigation from './components/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  const [allTeams, setAllTeams] = useState()
  const currentPage = useLocation().pathname

  return (
    <>
      {currentPage !== '/' ? 
      <>
        <Navigation allTeams={allTeams}/>
        <main>
          <Outlet />
        </main>
      </>
      :
      <>
        <h1>Hello turds</h1>

        <Link to={'/login'}>
          <button>Login</button>
        </Link>

        <Link to={'/register'}>
          <button>Register</button>
        </Link>
      </>
      }
    </>
  )
}