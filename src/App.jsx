import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from "./components/Forecast"
import HourlyWeather from "./components/HourlyWeather"

import Rainy from './assets/Rainy.mp4'
// import Sunny from './assets/Sunny.jpeg'
// import API_KEY from ''

function App() {
  const [weatherData, setWeatherData] = useState([])

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Miami&appid=${apiKey}`

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
      <video className="w-full h-full object-cover" src={Rainy} autoPlay loop muted />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      {/* {weatherData?.city?.name || ''} */}
      {weatherData?.list?.map((row) => (
        <>
        <CurrentWeather row={row}/>
        <Forecast weatherData={weatherData} setWeatherData={setWeatherData} />
        <HourlyWeather weatherData={weatherData} setWeatherData={setWeatherData} />
        </>
      ))}
      <SearchBar  weatherData={weatherData} setWeatherData={setWeatherData}/>
    </div>
  )
}

export default App
