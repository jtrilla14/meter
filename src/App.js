import React,{useState} from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'
import Header from './components/Header';
import HomePage from './components/Home'






const App = () => {


  
const [wifiSpeed,setwifiSpeed] = useState("Checking ... ")
return (
<div>
<Header/>
 <ReactInternetSpeedMeter
 txtSubHeading="El servicio de Internet es Lento"
 outputType="alert"
 customClassName={null}
 txtMainHeading="Aviso:"
 pingInterval="4000" // sec
 thresholdUnit='megabyte' // "byte" , "kilobyte", "megabyte"
 threshold={100}
 imageUrl="https://registro.iner.gob.mx/liceo/1.png"
            downloadSize="1781287"  //bytes
 callbackFunctionOnNetworkDown={(speed)=>console.log(`Velocidad de descarga ${speed}`)}
 callbackFunctionOnNetworkTest={(speed)=>setwifiSpeed(speed)}/>
  <HomePage
   wifiSpeed={wifiSpeed}/> 
 </div>
)}



export default App
