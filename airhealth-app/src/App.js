import React, {useState} from 'react';
import './App.css';
import AQIInfo from './components/AQI-Info';
import AQIForm from './components/AQIForm';
import DisplayForecast from './components/DisplayForecast';
import DisplayAQI from './components/DisplayAQI';



//original: https://api.waqi.info/feed/:city/?token=

const API_KEY ="8cd2f5f45e922a9f84630d9009f8b2bcc76a8489";
const API_URL="https://api.waqi.info/feed"

function App() {

  //const [city, setCity] = useState("");
  const [aqi, setAqi] = useState("");
  const [forecast, setForecast] = useState("");
  const [error, setError] = useState("");

async function getAQI(requestedData, city) {
  let url =`${API_URL}/${city}/?token=${API_KEY}`;
    console.log(url)

    setAqi("");
    setForecast("");

  try {
    let response = await fetch(url);
    if(response.ok) {
      //Server received and understood my request
      //wait for data
      let data = await response.json();
      if(requestedData === "AQI") {
          if(data.status === "ok") { 
            setAqi(data);
         } else {
          setError("Unknown city")
        }
       
       } else {
            if(data.status === "ok") { 
               setForecast(data);
            } else {
               setError("Unknown city")
        }
     }
    } else {
      console.log("Server error")
      setError(`Server error:  ${response.status} ${response.statusText}`)
    }
 
  } catch (err){
    //Server not contacted
    setError(`Network error: ${err.message}`);
      console.log(`Network error: ${err.message}`)
      
  }

};

  return (
    <div className="App">
      <h1>AirHealth</h1>
      <h3>Get the AQI of your city</h3>
  


    <AQIForm onSubmit={(requestedData, city) => getAQI(requestedData, city)}/>
    {aqi && <DisplayAQI aqi={aqi}/>}
  
    {forecast && <DisplayForecast forecast={forecast}/>}
    
    {error && <h3>{error}</h3>}
    <AQIInfo/>

    
    </div>
  );
}

export default App;
