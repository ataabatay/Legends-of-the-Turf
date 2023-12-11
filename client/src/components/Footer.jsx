import { Link } from 'react-router-dom'
import GitHub from '../assets/images/github.png'

export default function Footer() {
  return (
    <>
      <footer>
        <Link to='https://github.com/ataabatay'>
          <p><img src={GitHub} style={{ width: '1.5vh' }}></img> Adrienn Szabo</p>
        </Link>
        <Link to='https://github.com/aszab1'>
          <p><img src={GitHub} style={{ width: '1.5vh' }}></img> Ata Abatay</p>
        </Link>
        <Link to='https://github.com/Jerrellbb'>
          <p><img src={GitHub} style={{ width: '1.5vh' }}></img> Jerrell Boyer</p>
        </Link>
      </footer>
    </>
  )
}