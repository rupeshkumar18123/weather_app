
import React, {  useState } from 'react'
import Header from '../header_footer/Header'
import "./Home.css"
import WeatherForm from '../components/WeatherForm'
import WeatherDisplay from '../components/WeatherDisplay'
import DataContext from '../context/DataContext'
function Home() {
  const [weatherdata,setWeatherData] = useState("");
  return (
    <div className='home_body'>
      <DataContext.Provider value={{weatherdata,setWeatherData}}>
        <Header className="index_" />
        <WeatherForm/>
        <WeatherDisplay/>
        </DataContext.Provider>
    </div>
  )
}

export default Home