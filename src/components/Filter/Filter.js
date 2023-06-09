import React, { useState } from 'react'
import './Filter.css'

const Filter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
    console.log('Not implemented', searchTerm)
  }

  return (
    <div className="filter-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="filter-input"
        placeholder="Pesquise por trajetos ou ladeiras"
      />
      <button onClick={handleSearch} className="filter-button">
        Pesquisar
      </button>
    </div>
  )
}

export default Filter
