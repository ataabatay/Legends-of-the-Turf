import Fixtures from "./Fixtures";
import LeagueTable from "./LeagueTable";
import NewTeam from "./NewTeam";
import { useLoaderData } from "react-router-dom";


export default function Home(){

const data = useLoaderData()
const leagueTable = data.leagueTable.items[0].standings.tables[0].rows
console.log(leagueTable)
  return (
    <>
    <div className="container-wrapper">
    <Fixtures />
    <LeagueTable leagueTable = {leagueTable}/>
    </div>
    
    </>
  )
}

