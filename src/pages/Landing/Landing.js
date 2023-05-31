import './Landing.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from '../../components/Map'

function Landing() {
  return (
    <div className="Landing">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <header className="Landing-header">
          <Map />
        </header>
      </Wrapper>
    </div>
  )
}

export default Landing
