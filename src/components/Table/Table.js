import { useNavigate } from 'react-router-dom'
import './Table.css'

import {
  getHumanReadableCategory,
  getHumanReadableLevel
} from '../../utils/utils'

function Table({ currentRoutes }) {
  const navigate = useNavigate()

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

  return (
    <div className="listTable">
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
          {currentRoutes.map((route, index) => (
            <tr key={route.id}>
              <td>{route.title}</td>
              <td>{getHumanReadableCategory(route.category)}</td>
              <td>{getHumanReadableLevel(route.levels)}</td>
              {/* <td>{generateStars(route.rate)}</td> */}
              <td>
                <button
                  className="detail-button"
                  onClick={() => goTo(route.id)}
                >
                  Ver mapa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
