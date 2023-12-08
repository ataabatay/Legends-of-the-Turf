import './App.css'
import Navigation from './components/Nav'
import { Outlet, useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

export default function App() {

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