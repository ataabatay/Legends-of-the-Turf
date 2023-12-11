// React and router imports
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import './styles/main.scss'

// Styles 

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
import { FixturesAndLeagueTable } from '../utils/loader.js';

// Style imports
import './index.css'
import { getMyTeam } from '../utils/loader.js';
import { deleteTeam } from '../utils/actions/teams.js'


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
        loader: FixturesAndLeagueTable
        // add loadHomePage loader function
      },
      // {
      //   path: '/fixtures/',
      //   element: <Fixtures />   
      // },
      {
        path: '/rules',
        element: <Rules />,
      },
      {
        path: '/myteam/:teamId',
        element: <MyTeam />,
        loader: async ({ params }) => getMyTeam(params.teamId),
        action: async ({ params }) => deleteTeam(params.teamId)
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
