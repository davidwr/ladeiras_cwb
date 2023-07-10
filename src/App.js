import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import CookieConsent from './pages/Terms/CookieConsent'

const App = () => {
  return (
    <>
      <div className="app-div">
        <Navbar />
        <CookieConsent />
      </div>
    </>
  )
}

export default App
