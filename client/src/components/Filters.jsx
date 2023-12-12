import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Filters({ positions, teams, filters, setFilters, playersDataToRender }) {

  return (
    <>
    <div style={{ display: 'flex' }}>

      {/* Filter button */}
      <DropdownButton
        align="end"
        title="Filter"
        id="dropdown-menu-align-end"
        style={{ margin: '20px' }}
      >
        <Dropdown.Item>All Players</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'black' }}>By Position</Dropdown.Header>
        {positions.map((position, idx) => {
          return <Dropdown.Item eventKey={idx} key={idx}>{position}</Dropdown.Item>
        })}
        <Dropdown.Divider />
        <Dropdown.Header style={{ fontSize: '1.2em', fontWeight: 'bold', color: 'black' }}>By Team</Dropdown.Header>
        {teams.map((team, idx) => {
          return <Dropdown.Item eventKey={idx} key={idx}>{team}</Dropdown.Item>
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