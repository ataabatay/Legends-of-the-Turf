import { useState, useEffect } from 'react'
import ARS from '../assets/images/badges/arsenal-logo-vector.png'
import AVL from '../assets/images/badges/aston-villa-logo.png'
import BRE from '../assets/images/badges/brentford.png'
import BOU from '../assets/images/badges/bournemouth.png'
import BHA from '../assets/images/badges/brighton.png'
import BUR from '../assets/images/badges/burnley.png'
import CHE from '../assets/images/badges/chelsea.png'
import EVE from '../assets/images/badges/everton.png'
import FUL from '../assets/images/badges/fulham.png'
import LIV from '../assets/images/badges/liverpool.png'
import LUT from '../assets/images/badges/luton.png'
import MCI from '../assets/images/badges/mancity.png'
import MUN from '../assets/images/badges/manu.png'
import NEW from '../assets/images/badges/newcastle.png'
import NFO from '../assets/images/badges/nottsforest.png'
import CRY from '../assets/images/badges/palace.png'
import SHU from '../assets/images/badges/sheffield.png'
import TOT from '../assets/images/badges/tottenham.png'
import WHU from '../assets/images/badges/westham.png'
import WOL from '../assets/images/badges/wolves.png'


const TeamSlider = () => {
  const teamLinks = [
    { name: 'Arsenal', url: 'https://www.arsenal.com/', image: ARS },
    { name: 'Aston Villa', url: 'https://www.avfc.co.uk/', image: AVL },
    { name: 'Brentford', url: 'https://www.brentfordfc.com/', image: BRE },
    { name: 'Bournemouth', url: 'https://www.afcb.co.uk/', image: BOU },
    { name: 'Brighton', url: 'https://www.brightonandhovealbion.com/', image: BHA },
    { name: 'Burnley', url: 'https://www.burnleyfootballclub.com/', image: BUR },
    { name: 'Chelsea', url: 'https://www.chelseafc.com/', image: CHE },
    { name: 'Everton', url: 'https://www.evertonfc.com/', image: EVE },
    { name: 'Fulham', url: 'https://www.fulhamfc.com/', image: FUL },
    { name: 'Liverpool', url: 'https://www.liverpoolfc.com/', image: LIV },
    { name: 'Luton Town', url: 'https://www.lutontown.co.uk/', image: LUT },
    { name: 'Manchester City', url: 'https://www.mancity.com/', image: MCI },
    { name: 'Manchester United', url: 'https://www.manutd.com/', image: MUN },
    { name: 'Newcastle United', url: 'https://www.nufc.co.uk/', image: NEW },
    { name: 'Nottingham Forest', url: 'https://www.nottinghamforest.co.uk/', image: NFO },
    { name: 'Crystal Palace', url: 'https://www.cpfc.co.uk/', image: CRY },
    { name: 'Sheffield United', url: 'https://www.sufc.co.uk/', image: SHU },
    { name: 'Tottenham Hotspur', url: 'https://www.tottenhamhotspur.com/', image: TOT },
    { name: 'West Ham United', url: 'https://www.whufc.com/', image: WHU },
    { name: 'Wolverhampton Wanderers', url: 'https://www.wolves.co.uk/', image: WOL },
  
  ]

  


  return (
    <div className="team-links">Club Sites
      {teamLinks.map((team, index) => (
        <div key={index} className="team-item">
          <a href={team.url} target="_blank" rel="noopener noreferrer">
            <img src={team.image} alt={team.name} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default TeamSlider