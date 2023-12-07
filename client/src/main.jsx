// React and router imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Page components
import App from './App.jsx';
import Register from '../src/components/Register.jsx';
import Login from '../src/components/Login.jsx';
import Home from '../src/components/Home.jsx';
import Rules from '../src/components/Rules.jsx';
import MyTeam from '../src/components/MyTeam.jsx';
import NewTeam from '../src/components/NewTeam.jsx';
import PlayerSelection from '../src/components/PlayerSelection.jsx';
import Footballers from '../src/components/Footballers.jsx';
import SingleFootballer from '../src/components/SingleFootballer.jsx';

// Style imports
import './index.css'

const router = createBrowserRouter(
[  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/register',
        element: <Register />,
        // add registerUser action function
      },
      {
        path: '/login',
        element: <Login />,
        // add loginUser action function
      },
      {
        path: '/home',
        element: <Home />,
        // add loadHomePage loader function
      },
      {
        path: '/rules',
        element: <Rules />,
      },
      {
        path: '/myteam/:teamId',
        element: <MyTeam />,
        // add loadMyTeam loader function
      },  
      {
        path: '/myteam/newteam',
        element: <NewTeam />,
        // add createTeam action function
      },
      {
        path: '/myteam/newteam/footballerselection',
        element: <PlayerSelection />,
        // add loadAllPlayers loader function,
        // add addPlayersToTeam action function,
      },
      {
        path: '/footballers',
        element: <Footballers />,
        // add loadAllPlayers loader function
      },
      {
        path: '/footballers/:footballerId',
        element: <SingleFootballer />,
        // add loadSinglePlayer loader function
      }
    ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
