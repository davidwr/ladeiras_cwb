import { useRef, useEffect, useContext } from 'react'

import './Map.css'
import MapContext from '../../context/MapContext'

import ShareButton from '../../components/ShareButton/ShareButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

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
    if (props.shareUrl) {
      return window.open(props.shareUrl, '_blank')
    }

    const directions = directionsRendererRef.current.getDirections()

    if (directions) {
      const origin = directions.request.origin.location
      const destination = directions.request.destination.location
      const waypoints = directions.request.waypoints

      let url = 'https://www.google.com/maps/dir/?api=1'
      url += '&origin=' + encodeURI(`${origin.lat()},${origin.lng()}`)
      url +=
        '&destination=' + encodeURI(`${destination.lat()},${destination.lng()}`)

      if (waypoints && waypoints.length > 0) {
        url +=
          '&waypoints=' +
          waypoints
            .map(waypoint =>
              encodeURI(
                `${waypoint.location.location.lat()},${waypoint.location.location.lng()}`
              )
            )
            .join('|')
      }

      url += '&travelmode=' + encodeURI(directions.request.travelMode)
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
          <FontAwesomeIcon className="icon" icon={faMapMarker} />
        </button>
      </div>
    </div>
  )
}

export default Map
