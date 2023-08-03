import React from 'react'
import {Link} from "react-router-dom"
 function Header() {
  return (
    
    <>
    <nav>
        <h1>loge</h1>
        <ul>
            <li><Link to='top10'>Top10</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}
export default Header
