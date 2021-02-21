import React, {useState} from 'react';



function AQIForm(props){
    const [city, setCity] = useState("");



function handleChange(event){
    //handle data in input form
    setCity(event.target.value);
}



function handleEvent(event){
    let requestedData;
    //check whether the user clicked AQI
    if(event.type=== "submit"){
        //prevent send to server
        event.preventDefault();
        requestedData = "AQI";
    }
    //the user clicked Forecast
    else {
        requestedData = "Forecast";
    }
        props.onSubmit(requestedData, city)

    //reset form fields
    setCity("");
}


    return (
            <div className="AQIForm">
                <form onSubmit={handleEvent}>
                    <label>
                        Enter city
                        <input 
                        name="location"
                        type="text"
                        value={city}
                        onChange={handleChange}
                        />
                
                <br/>
                    </label>
                    <button type="submit">Get AQI</button>
                    <button type="button" onClick={handleEvent}>Get forecast</button>
                </form>
              
            </div>
      
    );

}

export default AQIForm;