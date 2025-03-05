import React, { useContext } from 'react'
import "./Component.css"
import DataContext from '../context/DataContext';
function WeatherDisplay() {
  const {weatherdata} = useContext(DataContext)
  if (!weatherdata) return <p>No weather data available</p>;
  return (
    <div className='main_display'>
      <div className='background_layer'>
      </div>
      <div className='content'>
       
       

     


    <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-3xl">{weatherdata.current.name}</h2>
        <p className="text-gray-400">{weatherdata.current.weather[0].description}</p>
        <h3 className="text-5xl">{weatherdata.current.main.temp}°C</h3>

        <div className="flex justify-between mt-4">
            <div>🌡️ Feels Like: {weatherdata.current.main.feels_like}°C</div>
            <div>💧 Humidity: {weatherdata.current.main.humidity}%</div>
            <div>💨 Wind Speed: {weatherdata.current.wind.speed} km/h</div>
            <div>☀️ UV Index: {weatherdata.current.uvi || "N/A"}</div>
        </div>

        <h3 className="mt-6 text-xl">Forecast</h3>
        <div className="grid grid-cols-6 gap-4">
            {weatherdata.forecast.list.slice(0, 6).map((day, index) => (
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
