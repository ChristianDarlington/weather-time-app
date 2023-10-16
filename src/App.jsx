import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
// import Forecast from "./components/Forecast"
// import HourlyWeather from "./components/HourlyWeather"

// import Rainy from './assets/Rainy.mp4'
// import Sunny from './assets/Sunny.jpeg'
// import API_KEY from ''

function App() {
  const [weatherData, setWeatherData] = useState([])

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.log(error, 'nothing')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(weatherData)

  return (
    <div className="relative w-full h-screen">
      {/* <video className="w-full h-full object-cover" src={Rainy} autoPlay loop muted /> */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" /> */}
      {weatherData.length > 0 && (
        <ul>
          {weatherData.map(user => (
            <h1 className=' bg-red-700' key={user.city.id}>{user.main.temp}</h1>
          ))}
        </ul>
      )}

      <SearchBar />
      <CurrentWeather dataProp={weatherData} />
      {/* <Forecast />
<HourlyWeather />   */}
    </div>
  )
}

export default App
