
import React from 'react'
import {Link} from 'gatsby'
import * as styles from './NavBar.module.css'
import Logo from '../Logo/Logo'

export default function NavBar() {
  return (
    <nav
      className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/wings">Wings</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </nav>
  )
}