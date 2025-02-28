
import React from 'react'
import "./Header_footer.css"
import { TiWeatherCloudy } from "react-icons/ti";

function Header() {
  return (
    <div className='header background_transparent'>
     
       <h1>  <TiWeatherCloudy className='icon_margin' size={32}/> Weather app</h1> 

       
    </div>
  )
}

export default Header