import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Component.css";
import DataContext from "../context/DataContext";
import axios from "axios"
const API_URL ="https://weather-app-git-main-rupeshkumar18123s-projects.vercel.app"
function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");
  const {setWeatherData} = useContext(DataContext);

  const handleSearch = () => {
    if (city.trim() === "") return;
      
    axios.post(`${API_URL}/api/fetchWeather`,{city})
    .then(result=>{
      console.log(result);
      setWeatherData(result.data);
    }).catch(err=>{
      console.log(err);
    })


    // setWeatherData(city);
  };


  return (
    <div className="weather-form">
      <input
        type="text"
        className="weather-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className="search-button" onClick={handleSearch}>
        <FiSearch className="search-icon" />
      </button>
    </div>
  );
}

export default WeatherForm;
