import React, { useState } from 'react'
import './Filter.css'

const Filter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [levelFilter, setLevelFilter] = useState('')

  const handleInputChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm, categoryFilter, levelFilter)
  }

  const handleCategoryFilterChange = e => {
    setCategoryFilter(e.target.value)
  }

  const handleLevelFilterChange = e => {
    setLevelFilter(e.target.value)
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
      <select
        value={categoryFilter}
        onChange={handleCategoryFilterChange}
        className="filter-dropdown"
      >
        <option value="">Categoria</option>
        <option value="">Todos</option>
        <option value="ladeira">Ladeira</option>
        <option value="trajeto">Trajeto</option>
      </select>

      <select
        value={levelFilter}
        onChange={handleLevelFilterChange}
        className="filter-dropdown"
      >
        <option value="">Nível</option>
        <option value="">Todos</option>
        <option value="BEGINNER">Iniciante</option>
        <option value="INTERMEDIATE">Intermediário</option>
        <option value="ADVANCED">Avançado</option>
      </select>
      <button onClick={handleSearch} className="filter-button">
        Pesquisar
      </button>
    </div>
  )
}

export default Filter
