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

**_(Images to come)_**

Below are close up snapshots of several examples of the pages.

**Home Page**

**_(Images to come)_**

We designed the user journey so that when a user lands on our app, the first thing they land on is a page where they are asked to either register or login. If the user registers for the first time, they are redirected to the login page so to login. Once logged in they land on what we call the Home page as seen above where they can see the fixture of real-time football matches scheduled to be played that week as well as a live league table. 

On this page when the user clicks on “My Team” from the nav, if the user already has a team they are redirected to the “My Team” page where they can visualise their current selection of players, their team name and total score. If the user has not created a team before in the app, they are directed to create a team page. Find examples below.

**My Team Page**

**_(Images to come)_**

My team page has the functionality to allow you to delete your team or edit the players you have selected for your squad which is missing from the wireframes but was added later.

**Create Team Page**

**_(Images to come)_**

Below is a snippet of the user stories we initially discussed and agreed to bring into the app.

**_(Images to come)_**

We have also discussed the data models as well as the general sense of the router, check below.

**_(Images to come)_**
**_(Images to come)_**

Once the plan was conceived, I then created the action plan of what to be worked on, by who and when. The group lacked familiarity with Trello or any other project management tool, so we chose to keep track of the work in a simpler manner using Notion. 

Every morning, I held a stand-up meeting for 30 mins for each of us to go through the item we each worked on the previous day, demo to the rest of the group, ask for assistance if required and set the agenda for the upcoming day. At the end of the project below is how our work monitoring table in Notion looked.

**Project Management Table**

**_(Images to come)_**

## Build Process
A detailed map of all the items we worked on can be found above in the project management table. Chronology of the was as follows:

### Day 1
The team worked on the initial version of the Express app, created a nav bar, created some seed data and the models and schemas. I worked on creating a router for the server side and the initial version of the controllers page with simple functions to be completed later on.

**_(Images to come)_**

### Day 2
The team worked on testing all the endpoints created and on initial designs. I worked on the footer, on redoing the seed data, and on the rules page with React accordion. This took me a long time as this was the first time I worked with React components and getting the accordion work was not easy. I made the mistake of not reading the “Get Started” section of React Bootstrap and spent a considerable time trying to get the Accordion to appear on screen. The result was a success.

**_(Images to come)_**

### Day 3
The team worked on creating a secure route for endpoints, Register and Login routes, and on testing register and login endpoints. I worked on the initial version of the Players page that consumes third party API to load players and show in a React table. Working with the table component was much easier after the accordion. I also made improvements on the controller functions.

**_(Images to come)_**
**_(Images to come)_**
**_(Images to come)_**

### Day 4
The team worked on signout functionality, routing logic for the “My Team” page and initial version of the My Team page. In the meantime, I worked on separate filtering and sorting dropdown components as well as functionality for all the players in the “Players” page. I also worked on pagination for players as there were in excess of 600 players to show.

**_(Images to come)_**
**_(Images to come)_**

**Pagination**

**_(Images to come)_**
**_(Images to come)_**
**_(Images to come)_**

### Day 5
The team worked on the DELETE team endpoint and the functionality to be able to delete your team. On day 5 I worked on some seed data fixes, revamped My Team page designs completely to show the pitch and the players, and also worked on bug fixing for routing, API data not loading, and MyTeam page not leading to the New Team page if you don’t have a team.

### Day 6
On the final days, the team focused on designs and image upload functionality with Cloudinary while I focused on player selection functionality with rules such as transferring max 4 defenders, 4 midfielders, 2 forwards, 1 goalkeeper. I also worked on changing players in the team after the initial selection (making transfers) functionality. I used the same footballers page component I created on the player selection page which made the footballers page component a little more complex than I intended. However, the result was a display of reusability of a component which made me understand the power of object oriented programming and React even further.

**_(Images to come)_**

**Footballers component inside of another page**

**_(Images to come)_**

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
