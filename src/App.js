import './App.css'
import { Wrapper } from '@googlemaps/react-wrapper'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <header className="App-header">
          <h1>Ladeiras CWB</h1>
          <Map />
        </header>
      </Wrapper>
    </div>
  )
}

export default App
