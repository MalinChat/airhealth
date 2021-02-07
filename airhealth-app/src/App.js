import React, {useState} from 'react';
import './App.css';



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

      <ul>
        {
          city.map(c=> <li>{c.city}</li>)
        }

      </ul>

      <button onClick={getCity} type="button">Get city</button>
    </div>
  );
}

export default App;
