import { useRef, useEffect, useState } from 'react'

function Map(props) {
  const ref = useRef()
  const [distance, setDistance] = useState()

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService()
    const directionsRenderer = new window.google.maps.DirectionsRenderer()
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
      }
    })
  })

  return (
    <div>
      <div ref={ref} style={{ height: '250px', width: '600px' }}></div>
      {distance && <p>Distância: {distance}</p>}
    </div>
  )
}

export default Map
