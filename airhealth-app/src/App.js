import React, {useState} from 'react';
import './App.css';
import AQIInfo from './components/aqi-info';
import AQIForm from './components/AQIForm';



function App() {



async function getAQI(requestedData, city) {
  let url ='https://api.waqi.info/feed/:city/?token=';
    console.log(city)

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
      
      <ul>
        {
          city.map(c=> <li>{c.city}</li>)
        }

      </ul>


    <AQIForm onSubmit={(requestedData, city) => getAQI(requestedData, city)}/>
    <AQIInfo/>

    
    </div>
  );
}

export default App;
