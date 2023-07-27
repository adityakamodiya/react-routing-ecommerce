import React from 'react'
// import Cart from './Cart'
import { Link } from 'react-router-dom'

function Header() {
  // console.log('hello')

  return (
    <nav className='header'>
      <h1>Site Logo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us </Link></li>
        <li><Link to="/form">form</Link></li>
        <li><Link to="/cart">cart</Link></li>
      </ul>
    </nav>
  )
}

export default Header
