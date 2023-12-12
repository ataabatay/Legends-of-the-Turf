import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from 'react';

export default function Filters({ positions, teams, cleanedFootballersData, setfilteredFootballers }) {

  // ! States
  const [filters, setFilters] = useState({
    filterBy: 'All Players',
    sortBy: ''
  })

  // ! Functions 
  function handleChange(e) {
    let newObj = {}
    // if e is null then set filterby to all players
    if (e) {
      newObj = {
        ...filters,
        filterBy: e
      }
    } else {
      newObj = {
        ...filters,
        filterBy: 'All players',
        sortBy: ''
      }
    }
    setFilters(newObj)
    console.log(newObj)
  }

  // !Effects
  useEffect(() => { // apply filter based on dropdown selection and show relevant players only
    // checking to see if the applied filter is a position or a team
    // if below is falsy that means the applied filter is a team
    let filteredFootballersArray = null
    if (filters.filterBy === 'All players') {
      filteredFootballersArray = cleanedFootballersData
    } else {
      if (!positions.find(position => position === filters.filterBy)) {
        filteredFootballersArray = cleanedFootballersData.filter(player => {
          return player.teamName === filters.filterBy
        })
      } else {
        filteredFootballersArray = cleanedFootballersData.filter(player => {
          return player.position === filters.filterBy
        })
      }
    }
    console.log(filteredFootballersArray)
    setfilteredFootballers(filteredFootballersArray)
  }, [positions, filters, cleanedFootballersData, setfilteredFootballers])

  useEffect(() => { // load all players on initial componenet render
    setfilteredFootballers(cleanedFootballersData)
  }, [])

  return (
    <>
      <div style={{ display: 'flex' }}>

        {/* Filter button */}
        <DropdownButton
          align="end"
          title={`${filters.filterBy}`}
          id="dropdown-menu-align-end"
          style={{ margin: '20px' }}
          onSelect={handleChange}
        >
          <Dropdown.Item>All Players</Dropdown.Item>
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
          title="Sort by"
          id="dropdown-menu-align-end"
          style={{ margin: '20px' }}
        >
          <Dropdown.Item eventKey="1">Price</Dropdown.Item>
          <Dropdown.Item eventKey="2">Points</Dropdown.Item>
          <Dropdown.Item eventKey="3">Form</Dropdown.Item>
          <Dropdown.Item eventKey="4">Owned by</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  )
}