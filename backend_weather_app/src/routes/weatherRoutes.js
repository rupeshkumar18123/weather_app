const express = require("express");
// const cors = require("cors");
const {fetchWeatherData} = require("../model/fetchWeather");
const router = express.Router();
router.use(express.json());
// router.use(cors());

// Handle preflight requests
// router.options("*", cors());

router.post("/fetchWeather",async (req,resp)=>{
    
    try {
        // const {city} =  "rajkot";
         const {city} =  req.body;
         if (!city) return resp.status(400).json({ msg: "City is required" });

         const weatherData = await fetchWeatherData(city);
         resp.json(weatherData);
        
     } catch (error) {
        resp.status(500).json({msg:"Failed to fetch weather data",error})
        
     }

});

module.exports = router;