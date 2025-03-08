const express = require("express");

const {fetchWeatherData} = require("../model/fetchWeather");
const router = express.Router();
router.use(express.json());


router.post("/fetchWeather",async (req,resp)=>{
    
    try {
         const {city} = req.body;
         if (!city) return resp.status(400).json({ msg: "City is required" });

         const weatherData = await fetchWeatherData(city);
         resp.json(weatherData);
        
     } catch (error) {
        resp.status(500).json({msg:"Failed to fetch weather data"})
        
     }

});

module.exports = router;