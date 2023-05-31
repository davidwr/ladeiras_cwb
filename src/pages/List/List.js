import { useNavigate } from 'react-router-dom'
import './List.css'
import routes from '../../maps/routes.json'

function List() {
  const navigate = useNavigate()

  function goTo(id) {
    navigate('/trajeto/' + id)
  }

  //TODO refactor each row to a component
  return (
    <table>
      <thead>
        <tr>
          <th>Nome/Apelido</th>
          <th>Level</th>
          <th>Rate</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(routes).map((key, index) => (
          <tr key={key}>
            <td>{routes[key].title}</td>
            <td>{routes[key].level}</td>
            <td>{routes[key].rate}/5 estrelas</td>
            <td>
              <button onClick={() => goTo(key)}>Detalhes</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default List
