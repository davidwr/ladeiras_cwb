import './Trajeto.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../../components/Map/Map'
import routes from '../../maps/routes.json'
import { useParams } from 'react-router-dom'

import {
  getHumanReadableLevel,
  getHumanReadableCategory
} from '../../utils/utils'

function Trajeto() {
  const { id } = useParams()

  //TODO validate id
  const { title, levels, map_data, category, details } = routes.filter(
    r => r.id === id
  )[0]

  return (
    <div className="Trajeto">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <header className="Trajeto-header">
          <h2>{title}</h2>
          <Map mapData={map_data} category={category} />

          {/* TODO useContext for taking distance from Map component */}
          {/* {distance && <p>Distância: {distance}</p>} */}
          <p>Categoria: {getHumanReadableCategory(category)}</p>
          <p>Nível: {getHumanReadableLevel(levels)}</p>
          <p>Detalhes: {details}</p>
        </header>
      </Wrapper>
    </div>
  )
}

export default Trajeto
