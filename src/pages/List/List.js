import { useNavigate } from 'react-router-dom'
import './List.css'
import routes from '../../maps/routes.json'

import {
  getHumanReadableCategory,
  getHumanReadableLevel
} from '../../utils/utils'

function List() {
  const navigate = useNavigate()

  function goTo(id) {
    navigate('/trajeto/' + id)
  }

  function generateStars(rate) {
    const stars = []

    for (let index = 0; index < rate; index++) {
      stars.push(<span key={index} className="fa fa-star checked"></span>)
    }

    return <div>{stars}</div>
  }

  //TODO refactor each row to a component
  return (
    <div className="listTable">
      <table>
        <thead>
          <tr>
            <th>Nome/Apelido</th>
            <th>Categoria</th>
            <th>Nível</th>
            <th>Pontuação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(routes).map((key, index) => (
            <tr key={key}>
              <td>{routes[key].title}</td>
              <td>{getHumanReadableCategory(routes[key].category)}</td>
              <td>{getHumanReadableLevel(routes[key].level)}</td>
              <td>{generateStars(routes[key].rate)}</td>
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
