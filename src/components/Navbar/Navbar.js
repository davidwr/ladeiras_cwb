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
        {/* <img
          src="/path/to/user-photo.png"
          alt="User"
          className="navbar__user-photo"
        /> */}
        <div className={`navbar__dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <button className="navbar__dropdown-toggle" onClick={toggleDropdown}>
            Menu
          </button>
          <div className="navbar__dropdown-menu">
            <a href="/trajetos">Trajetos</a>
          </div>
        </div>
      </div>
      <div className="navbar__center">
        <h1 className="navbar__site-name">Ladeiras CWB</h1>
      </div>
      <div className="navbar__right">{/* <SignIn /> */}</div>
    </nav>
  )
}

export default Navbar
