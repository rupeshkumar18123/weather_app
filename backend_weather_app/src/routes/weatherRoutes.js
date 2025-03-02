const axois = require("axios");
require("dotenv").config();

const weather_api_key = process.env.WEATHER_API;
const BASE_URL="https://api.openweathermap.org/data/2.5";

const fetchWeatherData = async (city)=>{
    const currentWeather = await axois.get(`${BASE_URL}/weather?q=${city}&appid=${weather_api_key}&units=metric`);
    const forecast = await axois.get(`${BASE_URL}/forecast?q=${city}&appid=${weather_api_key}&units=metric`);

    return {
        current:currentWeather.data,
        forecast:forecast.data,
    };
}

module.exports = {fetchWeatherData};