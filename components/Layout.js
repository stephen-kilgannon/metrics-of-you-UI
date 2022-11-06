import React, {useState} from 'react'
import SideNav from './SideNav'
import Header from './Header'

import styles from '../styles/Layout.module.css'

const Layout = ({ props, state, children }) => {
  const [wid, setWid] = useState('0%');
//   const openSidenav = ( ) => {
//     setWid('25%')
//  }
// const ref = useRef(null)
// const [width, setWidth] = useState(0);
// useLayoutEffect(() => {
//   setWidth(ref.current.offsetWidth);
  
// }, [])
  return (
    <div className='container'>
      <Header></Header>

    <div>
      {/* <button onClick = {openSidenav}>Open</button> */}
      <SideNav/>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    {/* </> */}
    </div>
    </div>
  )
}

export default Layout;
