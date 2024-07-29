import React from 'react'
import './nav.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-contents'>
        <h2>room</h2>
        <ul className='nav-list'>
          <li><a href="">home</a></li>
          <li><a href="">shop</a></li>
          <li><a href="">about</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar