import React, { useContext } from 'react'
import "./Component.css"

function WeatherDisplay({ weather }) {
  const {weatherdata} = useContext(DataContext)
  if (!weather) return <p>No weather data available</p>;
  return (
    <div className='main_display'>
      <div className='background_layer'>
      </div>
      <div className='content'>
       
       

     


    <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-3xl">{weather.current.name}</h2>
        <p className="text-gray-400">{weather.current.weather[0].description}</p>
        <h3 className="text-5xl">{weather.current.main.temp}°C</h3>

        <div className="flex justify-between mt-4">
            <div>🌡️ Feels Like: {weather.current.main.feels_like}°C</div>
            <div>💧 Humidity: {weather.current.main.humidity}%</div>
            <div>💨 Wind Speed: {weather.current.wind.speed} km/h</div>
            <div>☀️ UV Index: {weather.current.uvi || "N/A"}</div>
        </div>

        <h3 className="mt-6 text-xl">Forecast</h3>
        <div className="grid grid-cols-6 gap-4">
            {weather.forecast.list.slice(0, 6).map((day, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-md">
                    <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}</p>
                    <p>{Math.round(day.main.temp)}°C</p>
                    <p>{day.weather[0].description}</p>
                </div>
            ))}
        </div>
    </div>




      </div>

    </div>
  )
}

export default WeatherDisplay
