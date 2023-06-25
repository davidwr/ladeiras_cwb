import { useState } from 'react'

import './Trajeto.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../../components/Map/Map'
import routes from '../../maps/routes.json'
import { useParams } from 'react-router-dom'

import MapContext from '../../context/MapContext'
import Card from '../../components/Card/Card'

import {
  getHumanReadableLevel,
  getHumanReadableCategory
} from '../../utils/utils'

function Trajeto() {
  const { id } = useParams()
  const [distance, setDistance] = useState()
  const [elevation, setElevation] = useState()
  const [mapsUrl, setMapsUrl] = useState()

  const contextValue = {
    distance,
    setDistance,
    elevation,
    setElevation,
    mapsUrl,
    setMapsUrl
  }

  //TODO validate id
  const { title, levels, map_data, category, details } = routes.filter(
    r => r.id === id
  )[0]

  return (
    <div className="Trajeto">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <header className="Trajeto-header">
          <h2>{title}</h2>
          <MapContext.Provider value={contextValue}>
            <Map
              mapData={map_data}
              category={category}
              level={getHumanReadableLevel(levels)}
            />
            <div className="card-container">
              {distance && <Card cardTitle="Distância:" cardValue={distance} />}
              {elevation && (
                <Card cardTitle="Elevação Média:" cardValue={`${elevation}m`} />
              )}
              <Card
                cardTitle="Categoria:"
                cardValue={getHumanReadableCategory(category)}
              />
              <Card
                cardTitle="Nível:"
                cardValue={getHumanReadableLevel(levels)}
              />
            </div>
            <p>Detalhes: {details}</p>
          </MapContext.Provider>
        </header>
      </Wrapper>
    </div>
  )
}

export default Trajeto
