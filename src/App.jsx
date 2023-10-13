import SearchBar from './components/SearchBar'
import CurrentWeather from "./components/CurrentWeather"
// import Forecast from "./components/Forecast"
// import HourlyWeather from "./components/HourlyWeather"

import Rainy from './assets/Rainy.mp4'
// import Sunny from './assets/Sunny.jpeg'

function App() {
  // const [data, setData] = useState('')

  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=Miami&appid={}`

  return (
    <div className="relative w-full h-screen">
      <video className="w-full h-full object-cover" src={Rainy} autoPlay loop muted />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <SearchBar />
    <CurrentWeather />
  {/* <Forecast />
<HourlyWeather />   */}
    </div>
  )
}

export default App
