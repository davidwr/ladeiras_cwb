import './List.css'

function List() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Rate</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Intermediate</td>
          <td>$25/hour</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Sarah</td>
          <td>Advanced</td>
          <td>$30/hour</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Sarah</td>
          <td>Advanced</td>
          <td>$30/hour</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default List
