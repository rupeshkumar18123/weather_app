import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Component.css";

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");
  const {setWeatherData} = useContext(DataContext);

  const handleSearch = () => {
    if (city.trim() === "") return;
    setWeatherData(city);
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
