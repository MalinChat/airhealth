import React, {useState} from 'react';
import './App.css';
import AQIInfo from './components/aqi-info';



function App() {
const [city, setCity] = useState([]);


async function getCity() {
  let url ='https://api.waqi.info/feed/:city/?token=';


  try {
    let response = await fetch(url);
    if(response.ok) {
      //Server received and understood my request
      //wait for data
      let data = await response.json();
      setCity(data);

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
      <button onClick={getCity} type="button">Get city</button>
      <ul>
        {
          city.map(c=> <li>{c.city}</li>)
        }

      </ul>

      
    <AQIInfo/>

    
    </div>
  );
}

export default App;
