import Link from 'next/link'
import navStyles from '../styles/SideNav.module.css'

const SideNav = (props) => {
  return (
    <nav className={navStyles.nav} style={{ width: props.width }}>
      <b><Link href='/'>Home</Link><br></br></b>
      <b><Link href='/tide'>Tide</Link><br></br></b>
      <b><Link href='/gallery'>Gallery</Link></b>
      <b><Link href='/about'>About</Link></b>
    </nav>
  )
}

export default SideNav