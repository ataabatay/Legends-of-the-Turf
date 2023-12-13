
import { useLoaderData } from "react-router-dom"
import React, { useEffect } from 'react';

const PlayerSelection = ({ loaderData }) => {
  const teamData = loaderData && loaderData[0];
  const allPlayersData = loaderData && loaderData[1];

  useEffect(() => {
    // Use teamData and allPlayersData as needed
  }, [teamData, allPlayersData]);

  return (
    <>
      <h2>Unique turds for your team pick heavy hitter turds!</h2>
      {/* Additional JSX goes here */}
    </>
  );
};

export default PlayerSelection;