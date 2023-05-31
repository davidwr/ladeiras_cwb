import './Trajeto.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../../components/Map/Map'
import routes from '../../maps/routes.json'
import { useParams } from 'react-router-dom'

function Trajeto() {
  const { id } = useParams()

  //TODO validate id
  const { title, level, map_data } = routes[id]

  return (
    <div className="Trajeto">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <header className="Trajeto-header">
          <h2>{title}</h2>
          <Map mapData={map_data} />

          {/* TODO useContext for taking distance from Map component */}
          {/* {distance && <p>Distância: {distance}</p>} */}
          <p>Nível: {level}</p>
        </header>
      </Wrapper>
    </div>
  )
}

export default Trajeto
