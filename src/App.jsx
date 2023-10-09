
// import CurrentWeather from "./components/CurrentWeather"
// import Forecast from "./components/Forecast"
// import HourlyWeather from "./components/HourlyWeather"
import SearchBar from "./components/searchBar"
import Rain from './assets/Rain.jpeg'



function App() {

  // const [data, setData] = useState('')
 
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=Miami&appid={}`


  return (
    <>
    <SearchBar />
    <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={Rain} alt="" />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/30 '>
      
  {/* <CurrentWeather />
  <Forecast />
<HourlyWeather /> */}
</div>  
    </>
  )
}

export default App
