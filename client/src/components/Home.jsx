import Fixtures from "./Fixtures";
import LeagueTable from "./LeagueTable";
import NewTeam from "./NewTeam";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";


export default function Home(){

  const loaderData = useLoaderData()
  console.log(loaderData)

  return (
    <>
    <Fixtures />
    <LeagueTable />
    </>
  )
}

