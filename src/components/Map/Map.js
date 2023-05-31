import { useRef, useEffect, useState } from 'react'

function Map() {
  const ref = useRef()
  const [distance, setDistance] = useState()

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService()
    const directionsRenderer = new window.google.maps.DirectionsRenderer()
    const map = new window.google.maps.Map(ref.current, {
      zoom: 8,
      center: { lat: -25.385209745136674, lng: -49.30849165007152 }
    })
    directionsRenderer.setMap(map)

    const start = new window.google.maps.LatLng(
      -25.38261005932558,
      -49.31180395890537
    )
    const end = new window.google.maps.LatLng(
      -25.387303056261842,
      -49.30446489412115
    )
    const stops = [
      // {location: new window.google.maps.LatLng(37.7749, -122.4194), stopover: true},
      // {location: new window.google.maps.LatLng(37.4419, -122.1430), stopover: true},
      // {location: new window.google.maps.LatLng(37.3352, -121.8811), stopover: true}
    ]
    const request = {
      origin: start,
      destination: end,
      waypoints: stops,
      travelMode: 'WALKING'
    }
    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(result)

        const distance = result.routes[0].legs[0].distance.text
        setDistance(distance)
        console.log('Distance:', distance)
      }
    })
  })

  return (
    <div>
      <div ref={ref} style={{ height: '400px', width: '600px' }}></div>
      {distance && <p>Distância: {distance}</p>}
    </div>
  )
}

export default Map
