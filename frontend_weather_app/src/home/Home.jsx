
import React from 'react'
import Header from '../header_footer/Header'
import "./Home.css"
import WeatherForm from '../components/WeatherForm'
import WeatherDisplay from '../components/WeatherDisplay'
function Home() {
  return (
    <div className='home_body'>
        <Header className="index_" />
        <WeatherForm/>
        <WeatherDisplay/>
    </div>
  )
}

export default Home