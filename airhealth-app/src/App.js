import React, {useState} from 'react';
import './App.css';
import AQIInfo from './components/aqi-info';
import AQIForm from './components/AQIForm';
import DisplayResults from './components/DisplayResults';

/* for later
  city.map(c=> <li>{c.city}</li>)
}
*/
//original: https://api.waqi.info/feed/:city/?token=

const API_KEY ="8cd2f5f45e922a9f84630d9009f8b2bcc76a8489";
const API_URL="https://api.waqi.info/feed"

function App() {

  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState("");
  const [forecast, setForecast] = useState("");

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
      if(requestedData === "AQI"){
        setAqi(data);
      } else {
        setForecast(data);
      }
    

    } else {
      console.log("Server error")
      
    }
 
  } catch (err){
    //Server not contacted
      console.log(`Network error: ${err.message}`)
  }

}

  return (
    <div className="App">
      <h1>AirHealth</h1>
      <h3>Get the AQI of your city</h3>
      
      <ul>
       

      </ul>


    <AQIForm onSubmit={(requestedData, city) => getAQI(requestedData, city)}/>
    <DisplayResults aqi={aqi}/>
    <AQIInfo/>

    
    </div>
  );
}

export default App;
