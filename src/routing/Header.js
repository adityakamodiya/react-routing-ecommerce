import { useContext } from 'react'
import React from 'react'
// import Cart from './Cart'
import { Link } from 'react-router-dom'
import { globel } from './Home'

function Header() {
  const{item} = useContext(globel)
  

  function func(e){
    e.preventDefault()
    console.log("hello")
  }
  // console.log('hello')

  return (
    <nav className='header'>
      <h1>Site Logo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us </Link></li>
        <li><Link to="/form">form</Link></li>
        {/* <li><Link to="/cart"><span>cart</span></Link></li> */}
        <li><Link  to='/blog'>blog</Link></li>
        <li><a href='' onClick={func}>cart<span>{item.length}</span></a></li>
      </ul>
    </nav>
  )
}

export default Header
