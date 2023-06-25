import { useRef, useEffect, useState } from 'react'

function Map(props) {
  const ref = useRef()
  const [distance, setDistance] = useState()
  const [elevation, setElevation] = useState(null)
  const directionsRendererRef = useRef()

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

        const distance = result.routes[0].legs[0].distance.text
        setDistance(distance)

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
      <div ref={ref} style={{ height: '250px', width: '600px' }}></div>
      {distance && <p>Distância: {distance}</p>}
      {elevation && <p>Elevação Média: {elevation} m</p>}
      <button onClick={share}>Abrir no Maps</button>
    </div>
  )
}

export default Map
