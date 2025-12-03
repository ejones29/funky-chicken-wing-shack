
import React from 'react'
import {Link} from 'gatsby'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/wings">Wings</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </nav>
  )
}