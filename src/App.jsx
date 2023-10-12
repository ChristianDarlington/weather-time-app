
// import CurrentWeather from "./components/CurrentWeather"
// import Forecast from "./components/Forecast"
// import HourlyWeather from "./components/HourlyWeather"
import SearchBar from "./components/SearchBar"

import Rain from './assets/Rain.jpeg'
// import Sunny from './assets/Sunny.jpeg'



function App() {

  // const [data, setData] = useState('')
 
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=Miami&appid={}`


  return (
    <div className='w-full h-screen'>
    <img className="w-full h-screen object-cover" src={Rain} alt="" />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]"/>
    <SearchBar />
  {/* <CurrentWeather />
  <Forecast />
<HourlyWeather /> */}
    </div>
  )
}

export default App
