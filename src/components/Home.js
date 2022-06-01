import React from "react";
import SingleCards from "./SingleCard";
import './../assets/styles.css'
const HomePage = ({wifiSpeed}) => {
const data = [
{iconName:'wifi-outline',
 txtMain:'Tu velocidad en Wifi',
 txtInfo:`${wifiSpeed} MB/s`,key:'4'},]
return(
<div className='home-container'>
  <p>Medidor de Ancho de banda INER</p>

  <div className='card-container'>
   {data.map(item => <SingleCards {...item}/>)}
  </div>
</div>
 )
}
export default HomePage