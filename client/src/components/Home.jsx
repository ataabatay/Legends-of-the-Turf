import Fixtures from "./Fixtures";
import LeagueTable from "./LeagueTable";
import NewTeam from "./NewTeam";
<<<<<<< HEAD
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
=======
import { useLoaderData } from "react-router-dom";
>>>>>>> 94fdd132cd3c464d51e65de147a307056485b95a


export default function Home(){

<<<<<<< HEAD
  const loaderData = useLoaderData()
  console.log(loaderData)

=======
const data = useLoaderData()
const leagueTable = data.leagueTable.items[0].standings.tables[0].rows
console.log(leagueTable)
>>>>>>> 94fdd132cd3c464d51e65de147a307056485b95a
  return (
    <>
    <div className="container-wrapper">
    <Fixtures />
    <LeagueTable leagueTable = {leagueTable}/>
    </div>
    
    </>
  )
}

