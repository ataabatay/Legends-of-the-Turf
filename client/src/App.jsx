import './App.css'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './components/Typewriter'

export default function App() {
  const currentPage = useLocation().pathname

  return (
    <>
      {currentPage !== '/' ? 
      <>
        <Navigation/>
        <main>
          <Outlet />
        </main>
      </>
      :
      <>
      <div className='landing'>
        <h1 style={{ textAlign: 'center'}}>Welcome to <br />
        <Typewriter text="Legends of the Turf" delay={80} /></h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/login'}>
          <button className='login' type="button" class='btn btn-outline-primary btn-md m-2'>Login</button>
        </Link>

        <Link to={'/register'}>
          <button class='btn btn-outline-primary btn-md m-2'>Register</button>
        </Link>
        </div>
        </div>
      </>
      }
      <Footer />
    </>
  )
}