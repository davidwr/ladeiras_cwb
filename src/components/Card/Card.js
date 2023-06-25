import React from 'react'
import './Card.css'

const Card = ({ cardTitle, cardValue }) => {
  return (
    <div className="card">
      <h2 className="card-title">{cardTitle}</h2>
      <p className="card-description">{cardValue}</p>
    </div>
  )
}

export default Card
