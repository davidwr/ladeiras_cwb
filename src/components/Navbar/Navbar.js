import React, { useState } from 'react'
import './Navbar.css'

// import SignIn from './../SignIn/SignIn'

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className={`navbar__dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="navbar__dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <div className="navbar__dropdown-menu">
            <a href="/">Trajetos</a>
          </div>
        </div>
      </div>
      <div className="navbar__center">
        <h1 className="navbar__site-name">
          Ladeiras CWB<span className="beta-text">BETA</span>
        </h1>
      </div>
      <div className="navbar__right"></div>
    </nav>
  )
}

export default Navbar
