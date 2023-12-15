import './App.css'
import Navigation from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from './components/Typewriter'


export default function App() {
  const currentPage = useLocation().pathname
  const navigation = useNavigation()
console.log(import.meta.env.MODE)
  return (
    <>
      {currentPage !== '/' ? 
      <>
        <Navigation/>
        <main>
          {
          navigation.state === 'idle' ? 
          <Outlet />
          :
          <div className="loading"></div>
            
          
        }
        </main>
      </>
      :
      <>
      <div className='landing'>
        <h1 style={{ textAlign: 'center'}}>Welcome to <br />
        <Typewriter text="Legends of the Turf" delay={80} /></h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/login'}>
          <button className='login btn btn-dark btn-md m-2' type="button">Login</button>
        </Link>

        <Link to={'/register'}>
          <button className='btn btn-dark btn-md m-2'>Register</button>
        </Link>
        </div>
        </div>
      </>
      }
      <Footer />
    </>
  )
}