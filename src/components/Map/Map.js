import { useRef, useEffect, useContext } from 'react'

import './Map.css'
import MapContext from '../../context/MapContext'

import ShareButton from '../../components/ShareButton/ShareButton'

function Map(props) {
  const ref = useRef()
  const directionsRendererRef = useRef()

  const { setDistance, setElevation } = useContext(MapContext)

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService()
    const directionsRenderer = new window.google.maps.DirectionsRenderer()
    directionsRendererRef.current = directionsRenderer
    const map = new window.google.maps.Map(ref.current, {
      zoom: props.mapData.zoom,
      center: { lat: props.mapData.center.lat, lng: props.mapData.center.lng }
    })
    directionsRenderer.setMap(map)

    const start = new window.google.maps.LatLng(
      props.mapData.start.lat,
      props.mapData.start.lng
    )
    const end = new window.google.maps.LatLng(
      props.mapData.end.lat,
      props.mapData.end.lng
    )
    const stops = props.mapData.stops
    const request = {
      origin: start,
      destination: end,
      waypoints: stops,
      travelMode: 'BICYCLING'
    }
    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)

        const distanceObject = result.routes[0].legs[0].distance
        if (distanceObject.value < 1000) {
          setDistance(distanceObject.value)
        } else {
          setDistance(distanceObject.text)
        }

        if (props.category === 'ladeira') {
          const path = result.routes[0].overview_path
          const elevationService = new window.google.maps.ElevationService()
          const elevationRequest = {
            path: path,
            samples: 2
          }

          elevationService.getElevationAlongPath(
            elevationRequest,
            function (elevationResult, status) {
              if (status === 'OK') {
                const elevations = elevationResult.map(
                  result => result.elevation
                )

                const averageElevation = elevations.reduce((a, b) => a - b)
                setElevation(Math.round(averageElevation))
              }
            }
          )
        }
      }
    })
  })

  const share = () => {
    const directions = directionsRendererRef.current.getDirections()

    if (directions) {
      const url =
        'https://www.google.com/maps/dir/?api=1' +
        '&origin=' +
        encodeURI(
          `${directions.request.origin.location.lat()},${directions.request.origin.location.lng()}`
        ) +
        '&destination=' +
        encodeURI(
          `${directions.request.destination.location.lat()},${directions.request.destination.location.lng()}`
        ) +
        '&travelmode=' +
        encodeURI(directions.request.travelMode)
      window.open(url, '_blank')
    }
  }

  return (
    <div>
      <div ref={ref} className="g-maps"></div>
      <div className="maps-options" style={{ marginTop: '10px' }}>
        <ShareButton title={`Ladeiras CWB`} text={props.title} />
        <button className="maps-button" onClick={share}>
          Abrir no Maps
          <span className="icon fa fa-map-marker"></span>
        </button>
      </div>
    </div>
  )
}

export default Map
