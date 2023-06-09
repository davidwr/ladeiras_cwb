import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import './List.css'
import routes from '../../maps/routes.json'

import {
  getHumanReadableCategory,
  getHumanReadableLevel
} from '../../utils/utils'

import Filter from '../../components/Filter/Filter'

function List() {
  const navigate = useNavigate()
  const [filteredRoutes, setFilteredRoutes] = useState(routes)

  function goTo(id) {
    navigate('/trajeto/' + id)
  }

  // function generateStars(rate) {
  //   const stars = []

  //   for (let index = 0; index < rate; index++) {
  //     stars.push(<span key={index} className="fa fa-star checked"></span>)
  //   }

  //   return <div>{stars}</div>
  // }

  function onSearch(searchTerm) {
    if (!searchTerm) {
      return setFilteredRoutes(routes)
    }

    const filteredData = Object.keys(routes)
      .map(id => routes[id])
      .filter(item => {
        const searchInNestedObjects = obj => {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (typeof obj[key] === 'object') {
                if (searchInNestedObjects(obj[key])) {
                }
              } else if (
                String(obj[key])
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return true
              }
            }
          }
          return false
        }

        return searchInNestedObjects(item)
      })

    if (filteredData.length) {
      setFilteredRoutes(filteredData)
    } else {
      setFilteredRoutes(routes)
    }
  }

  return (
    <div className="listTable">
      <Filter onSearch={onSearch} />
      <table>
        <thead>
          <tr>
            <th>Nome/Apelido</th>
            <th>Categoria</th>
            <th>Nível</th>
            {/* <th>Pontuação</th> */}
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(filteredRoutes).map((key, index) => (
            <tr key={key}>
              <td>{filteredRoutes[key].title}</td>
              <td>{getHumanReadableCategory(filteredRoutes[key].category)}</td>
              <td>{getHumanReadableLevel(filteredRoutes[key].level)}</td>
              {/* <td>{generateStars(filteredRoutes[key].rate)}</td> */}
              <td>
                <button onClick={() => goTo(key)}>Ver mapa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
