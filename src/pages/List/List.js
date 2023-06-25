import React, { useState } from 'react'

import './List.css'

import routes from '../../maps/routes.json'

import Pagination from '../../components/Pagination/Pagination'
import Filter from '../../components/Filter/Filter'
import BottomBar from '../../components/BottomBar/BottomBar'

function List() {
  const [filteredRoutes, setFilteredRoutes] = useState(routes)

  function onSearch(searchTerm, categoryFilter, levelFilter) {
    let filteredData = routes

    if (categoryFilter) {
      filteredData = filteredData.filter(
        route => route.category === categoryFilter
      )
    }

    if (levelFilter) {
      filteredData = filteredData.filter(route =>
        route.levels.includes(levelFilter)
      )
    }

    if (!searchTerm) {
      return setFilteredRoutes(filteredData)
    }

    const filteredTerms = filteredData.filter(item => {
      const searchInNestedObjects = obj => {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
              if (searchInNestedObjects(obj[key])) {
              }
            } else if (
              String(obj[key]).toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true
            }
          }
        }
        return false
      }

      return searchInNestedObjects(item)
    })

    if (filteredTerms.length) {
      setFilteredRoutes(filteredTerms)
    } else {
      setFilteredRoutes(routes)
    }
  }

  return (
    <div>
      <Filter onSearch={onSearch} />
      <Pagination items={filteredRoutes} itemsPerPage={10} />
      <BottomBar />
    </div>
  )
}

export default List
