/* eslint-disable react/prop-types */
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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