# Legends of the Turf (team project - 1 week)

## Description
This is a group project completed with [Jerrell Boyer](https://github.com/Jerrellbb) and [Adrienn Szabo](https://github.com/adriennszabo). We worked on creating a full-stack fantasy football app using MERN stack. Legends of the Turf is an imitation of the official English Premier League fantasy football app. Our app includes various functionalities including but not limited to the ability to fetch all the available players using a GET endpoint from a database we created using MongoDB, the ability to create a team using a POST endpoint, the ability to add/remove (make transfers) players to your team using a PUT endpoint, as well as the ability to register and login to safekeep your account and your team. This project is my third project and first team project in my portfolio.

## Deployment Link
Visit [Legends of the Turf](https://turflegends-c3427055ca20.herokuapp.com/).

## Getting Started/Code Installation
1. Access the source code via the 'Clone or download' button,
2. Run “npm i” inside terminal to install the packages,
3. Run “npm run serve” to run the server side,
4. Run “npm run dev” to run the client side,
5. Follow the link.

## Timeframe & Working Team
We worked as a team with [Jerrell Boyer](https://github.com/Jerrellbb) and [Adrienn Szabo](https://github.com/adriennszabo) where I assumed the de-facto team leader and project manager role for roughly 1 week to complete the project to the state that it is in.

## Technologies Used
This project was built using MERN stack.

### MongoDB
Used to create a database to provide seed data of football players, store user details and as well teams created by users. So to store and manage the application's data.

### Express.js
Served as the server-side framework for the project facilitating the handling of HTTP requests, routing, middleware integration and the interaction between the web server and the MongoDB database.

### React.js
Used for developing the front-end or client-side of the app. React was particularly significant as it helped us efficiently update and render components, instead of updating the entire DOM every time there's a change as well as helping us create and manage navigation.

### Node.js
Served as the server-side runtime, handling the back-end operations of our app allowing us to use JS on the server side.

### SASS
Used to design all the components and overall design of the app.

## Brief
The project aimed to develop a comprehensive full-stack application, incorporating a custom backend and frontend. The main goal was to build an Express API to serve data from a MongoDB database, which would be consumed by a separate React frontend. The application had to be a complete product, featuring multiple relationships and CRUD functionality for at least a couple of models to provide a robust user experience.

### Technical Requirements
This project required creating a full-stack web application, developing both backend and frontend components. It involved building an Express API for efficient data management with MongoDB as the database. The React frontend independently interacted with the API. CRUD functionality for at least two models had to be implemented for a complete user experience. User stories and wireframes had to guide development, while a visually appealing design had to be prioritised. The final application had to be deployed online for public accessibility.

### Deliverables
The project deliverables included a functional web app created using MERN stack with a hosted version on GitHub. The repository will have a detailed version history, and the readme.md file will provide insights, screenshots, technology explanations, installation instructions, and links to user stories, and wireframes. Descriptions of challenges faced during development will provide insights.

## Planning
For the purposes of project management and monitoring, I was selected as the team leader for the group. We started with brainstorming and researching existing fantasy football apps to draw inspiration from. Collectively we decided that the best game in terms of functionality and design out there is the official English Premier League which was going to be the muse for our project.

We continued with a discussion of the functionalities we wanted to include which drove what endpoints we were going to include on the server side for the client side to call. Based on our discussions and decisions for the user journeys, I created the wireframes for each page including how the user journey would be on the app. Below are snippets from Figma.

![1](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/7b747147-a0a3-4d43-acb4-79f38cfd657c)

Below are close up snapshots of several examples of the pages.

**Home Page**

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/148dd414-5964-4dc7-bb1b-d7c7671425a1)

We designed the user journey so that when a user lands on our app, the first thing they land on is a page where they are asked to either register or login. If the user registers for the first time, they are redirected to the login page so to login. Once logged in they land on what we call the Home page as seen above where they can see the fixture of real-time football matches scheduled to be played that week as well as a live league table. 

On this page when the user clicks on “My Team” from the nav, if the user already has a team they are redirected to the “My Team” page where they can visualise their current selection of players, their team name and total score. If the user has not created a team before in the app, they are directed to create a team page. Find examples below.

**My Team Page**

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/c4c1f29d-eca0-4d22-b9f0-166e1555e1b9)

My team page has the functionality to allow you to delete your team or edit the players you have selected for your squad which is missing from the wireframes but was added later.

**Create Team Page**

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/11d32a32-fc84-44b2-ac84-7e5da4157270)

Below is a snippet of the user stories we initially discussed and agreed to bring into the app.

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/5f08616b-abad-4582-8618-125215b475c7)

We have also discussed the data models as well as the general sense of the router, check below.

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/a9e9ab43-fc78-49b1-9fa8-ca71251c63fa)
![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/f79d68ac-e852-4276-8f0e-2c1ca02a1ccf)

Once the plan was conceived, I then created the action plan of what to be worked on, by who and when. The group lacked familiarity with Trello or any other project management tool, so we chose to keep track of the work in a simpler manner using Notion. 

Every morning, I held a stand-up meeting for 30 mins for each of us to go through the item we each worked on the previous day, demo to the rest of the group, ask for assistance if required and set the agenda for the upcoming day. At the end of the project below is how our work monitoring table in Notion looked.

**Project Management Table**

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/c5abfddd-c410-4916-bae5-4b953709367a)

## Build Process
A detailed map of all the items we worked on can be found above in the project management table. Chronology of the was as follows:

### Day 1
The team worked on the initial version of the Express app, created a nav bar, created some seed data and the models and schemas. I worked on creating a router for the server side and the initial version of the controllers page with simple functions to be completed later on.

```javascript
import secureRoute from './secureRoute.js'

const router = express.Router()

router.route('/myteam/newteam')
  .post(secureRoute, createTeam)

router.route('/players')
  .get(getAllPlayers)

router.route('/myteam/:teamId/edit/players')
  .put(secureRoute, addPlayersToTeam)

router.route('/myteam/:teamId/edit/details')
  .put(secureRoute, changeTeamDetails)

router.route('/myteam/:teamId')
  .get(getMyTeam)
  .delete(secureRoute, deleteTeam)

router.route('/players/:playerId')
  .get(getSinglePlayer)

router.route('/teams')
  .get(getAllTeams)

router.route('/register')
  .post(register)

router.route('/login')
  .post(login)

// User
router.route('/profile')
  .get(secureRoute, getProfile)

export default router
```
### Day 2
The team worked on testing all the endpoints created and on initial designs. I worked on the footer, on redoing the seed data, and on the rules page with React accordion. This took me a long time as this was the first time I worked with React components and getting the accordion work was not easy. I made the mistake of not reading the “Get Started” section of React Bootstrap and spent a considerable time trying to get the Accordion to appear on screen. The result was a success.

![image](https://github.com/ataabatay/Legends-of-the-Turf/assets/25418371/6b8dac1a-c063-4fac-88ff-b22e380b1d75)

### Day 3
The team worked on creating a secure route for endpoints, Register and Login routes, and on testing register and login endpoints. I worked on the initial version of the Players page that consumes third party API to load players and show in a React table. Working with the table component was much easier after the accordion. I also made improvements on the controller functions.

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // own API
      '/api': 'http://localhost:3000',
      // 3rd party
      '/rest': {
        target: 'https://fantasy.premierleague.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rest/, '/api'),
        
      },
      '/plt': {
        target: 'https://www.chelseafc.com/en',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/plt/, '/api'),
        
      }
  }
}
})

```

```javascript
export async function getAllThirdPartyFootballers() {
  const playersFromThirdParty = await axiosFPL.get('/rest/bootstrap-static/')
  return playersFromThirdParty
}

export async function FixturesAndLeagueTable(){
  const [ fixturesRes, teamsRes, leagueRes ] = await Promise.all([
    axiosFPL.get('/rest/fixtures/?future=1'),
    axiosFPL.get('/rest/bootstrap-static/'), 
    axiosChelsea.get('/plt/fixtures/league-table?entryId=30EGwHPO9uwBCc75RQY6kg')
  ])
  return {
    fixtures: fixturesRes.data,
    teams: teamsRes.data.teams,
    leagueTable: leagueRes.data,
  }
}
```

```javascript
        <Table hover>
          <thead>
            <tr className='jersey-logo'>
              <th></th>
              <th className='name'>Name</th>
              <th className='price'>Price</th>
              <th className='points'>Points</th>
              <th className='inForm'>Form</th>
              <th className='owned-by'>Owned by</th>
            </tr>
          </thead>
          <tbody>
            {filteredFootballers.map(player => {
              const isPlayerSelected = selectedPlayers?.some(selectedPlayer => selectedPlayer.id === player.id)
              return (
                <tr
                  id={player.id}
                  key={player.id}
                  onClick={handleClick}
                  className={isPlayerSelected ? 'selected' : ''}
                >
                  <td className='jersey-logo'>
                    {<img src={player.teamLogo} alt="team jersey" />}
                  </td>
                  <td className='name'>
                    <span className='first-name'>{player.firstName}</span> <span className='last-name'>{player.lastName}</span> <br />
                    <span className='team-name'>{player.teamName}</span>
                    <span className='position'> {player.position}</span>
                  </td>
                  <td className='price'>{player.price}</td>
                  <td className='points'>{player.totalPoints}</td>
                  <td className='inForm'>{player.form}</td>
                  <td className='owned-by'>{player.ownership}%</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
```

### Day 4
The team worked on signout functionality, routing logic for the “My Team” page and initial version of the My Team page. In the meantime, I worked on separate filtering and sorting dropdown components as well as functionality for all the players in the “Players” page. I also worked on pagination for players as there were in excess of 600 players to show.

```javascript
export default function Filters({ positions, teams, filters, setFilters}) {

  function handleFilterChange(e) {
    let newFilter = {}
    newFilter = {
      ...filters,
      filterBy: e
    }
    setFilters(newFilter)
  }

  function handleSortChange(e) {
    let newFilter = {}
    newFilter = {
      ...filters,
      sortBy: e
    }
    setFilters(newFilter)
    console.log(filters)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>

        {/* Filter button */}
        <DropdownButton
          align="end"
          title={`${filters.filterBy}`}
          id="dropdown-menu-align-end"
          style={{ margin: '20px' }}
          onSelect={handleFilterChange}
        >
          <Dropdown.Item eventKey={'ALL'}>All Players</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'black' }}>By Position</Dropdown.Header>
          {positions.map((position, idx) => {
            return <Dropdown.Item eventKey={position} key={idx}>{position}</Dropdown.Item>
          })}
          <Dropdown.Divider />
          <Dropdown.Header style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'black' }}>By Team</Dropdown.Header>
          {teams.map((team, idx) => {
            return <Dropdown.Item eventKey={team} key={idx}>{team}</Dropdown.Item>
          })}
        </DropdownButton>

        {/* Sort button */}
        <DropdownButton
          align="end"
          title={`${filters.sortBy}`}
          id="dropdown-menu-align-end"
          style={{ margin: '20px' }}
          onSelect={handleSortChange}
        >
          <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
          <Dropdown.Item eventKey="Points">Points</Dropdown.Item>
          <Dropdown.Item eventKey="Form">Form</Dropdown.Item>
          <Dropdown.Item eventKey="Ownership">Ownership</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  )
}
```

**Pagination**

```javascript
export default function Pagetoggle({ nPages, currentPage, setCurrentPage }) {

  // All the page numbers array to use as reference on the pagination component
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


  // Handle click and set the current page to the page clicked
  let active = currentPage

  const handleClick = (e) => {
    setCurrentPage(parseInt(e.target.text))
    active = currentPage
  }

  return (
    <>
      <Pagination>
        {pageNumbers.map(pageNumber => {
          return <Pagination.Item
            key={pageNumber}
            onClick={handleClick}
            active={pageNumber === active}
          >
            {pageNumber}
          </Pagination.Item>
        })}
      </Pagination>
    </>
  )
}
```

```javascript
        <div className='paginationdiv'>
          <Pagetoggle
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
```

```javascript
    // Set the number of pages that will be shown in the pagination
    setNPages(Math.ceil(cleanedFootballersData.length / recordsPerPage))
    // index of the last item on page (based on the current page number multiplied by how number of items per page)
    const indexOfLast = currentPage * recordsPerPage
    // index of the first item on page
    const indexOfFirst = indexOfLast - recordsPerPage

    // final result of players to show on per page (30 items) after filtering is done
    const activePlayersToRender = playersToDisplay.slice(indexOfFirst, indexOfLast)
    setfilteredFootballers(activePlayersToRender)
    } 
```

### Day 5
The team worked on the DELETE team endpoint and the functionality to be able to delete your team. On day 5 I worked on some seed data fixes, revamped My Team page designs completely to show the pitch and the players, and also worked on bug fixing for routing, API data not loading, and MyTeam page not leading to the New Team page if you don’t have a team.

### Day 6
On the final days, the team focused on designs and image upload functionality with Cloudinary while I focused on player selection functionality with rules such as transferring max 4 defenders, 4 midfielders, 2 forwards, 1 goalkeeper. I also worked on changing players in the team after the initial selection (making transfers) functionality. I used the same footballers page component I created on the player selection page which made the footballers page component a little more complex than I intended. However, the result was a display of reusability of a component which made me understand the power of object oriented programming and React even further.

```javascript
  function handleClick(e) {
    // ! Making sure we're not on the actual footballers page where adding and removing players should not exist
    if (currentPath !== '/footballers') {
      // ! Variables
      const idOfPlayerToAdd = parseInt(e.currentTarget.id) // id of player we're gonna add
      const playerToAdd = filteredFootballers.find(player => player.id === idOfPlayerToAdd) // player himself to add to our selected players
      const selectedPlayerCounts = countPlayersByPosition(selectedPlayers) // get the number of players inside of our current selected players list by position
      // create a new empty array to spread the old list and make changes
      let newPlayerList = []

      // ! Logic
      // check to see if we can find the player to add
      if (!selectedPlayers.find(player => player.id === idOfPlayerToAdd)) {
        // if yes, check if there are already 11 players and the max number of players by that position is reached or not
        if (selectedPlayerCounts.TOT < maxCounts.TOT && selectedPlayerCounts[playerToAdd.position] < maxCounts[playerToAdd.position]) {
          // if not add the player to the selected players array
          newPlayerList = [...selectedPlayers, playerToAdd]
        } else return // if yes simply return and do not add the player
      } else { // if the player is already on the list remove the player and remove selected class
        newPlayerList = selectedPlayers.filter(player => player.id !== idOfPlayerToAdd)
        e.currentTarget.classList.remove('selected')
      }
      // set the selectedPlayers to the new list created
      setSelectedPlayers(newPlayerList)
    }
  }
```

**Footballers component inside of another page**

```javascript
  return (
    <>
      <div className="selection-screen">
        <div className="player-selection-and-button">
          <section className="selected-players">
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Player</th>
                  <th>Id</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {selectedPlayers.map((player, idx) => {
                  return (
                    <tr key={idx}>
                      <td><img style={{ width: '40px' }} src={player.teamLogo} alt='team-logo'></img></td>
                      <td>{player.lastName} {player.position} {player.teamName}</td>
                      <td>{player.id}</td>
                      <td>{player.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </section>
          <Form
            className="form"
            method="PUT"
          >
            <input type="hidden" name='players' value={selectedPlayers.map(player => player.id)}></input>
            <button type='submit' value='Make Transfers' onClick={handeClick}>Make Transfers</button>
          </Form>
        </div>
        <section className="available-players">
          <Footballers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        </section>
      </div >
    </>
  )
```

### Day 7
Final day was used exclusively for bug squashing and designs and prep for presentation.

## Challenges
We have selected a particularly ambitious goal for this project and not everything we desired made it into the final product. There have been occasions where we spent time on features that ended up not making it to the final product which lost us time. One of the notable challenges I found was to do with context changing. As we decided to work together all the time, we quite frequently asked for assistance from each other which caused each other to switch context and try to understand what the other was doing to offer assistance.

Another notable challenge was we wanted to consume third party APIs for fixtures and league table and assumed it would be an easy task to find one that is suitable. This proved to be a challenging task as a lot of the data we wanted to consume was pretty strictly protected behind paywalls or altogether not accessible. 

Working with React components was a bliss at times and a nightmare at others as the components were not easy to customise causing headache multiple times. 

## Wins
The fact that we ended up creating an almost fully fledged fantasy football app was a huge success in our eyes. We had real bad deployment issues that were beyond the scope of our knowledge due to CORS errors, so to see our project deployed was a big happy moment. The end design of the product we believe is a massive success and we managed to stay in course with clean and minimalistic design principles. Finally seeing the entire MERN stack in action was a massive plus for me to fully understand how everything clicks and works together.

## Key learnings
Biggest learning was the actual working in a team experience. Seeing how everyone’s work came together and the way to work on feature branches, to then push to development which at the end gets pushed to production was the exact experience I wanted to get out of this project as well as using MERN stack.

## Bugs
The major known bug is if you intend to make transfers to your team and only want to change a few players instead of the entire team the app causes some issues in displaying your team in the My Team page. If you by mistake do not have exactly 11 players in your, the display breaks. 

## Future Improvements
There is a lot of room for improvement. Specific areas where improvement is necessary are:

* The game does not have a points system where you can score points like in an actual fantasy football game which defeats the purpose of the app being a fantasy football app
* The transfer mechanics need to be significantly improved to allow you to only make certain transfers, as well as abiding to the rules of available funds, max x number of players from a certain team and more. 
* Transfer players page needs to include a pitch with your existing players so you can visualise which players you currently have in your team instead of just showing you an empty list to select players. So the concept of “existing players in my team” does not exist when making transfers.
* Design improvements.
