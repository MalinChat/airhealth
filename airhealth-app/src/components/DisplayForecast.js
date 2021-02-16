import React, {useState} from 'react';
import "./DisplayResults.css";


function DisplayForecast(props){

    let forecast = props.forecast;
    console.log(forecast.data.forecast.daily.pm25)


    
    return(
        
            <div className="DisplayForecast">
                <p>The air quality forecast for {forecast.data.city.name} is: {forecast.data.forecast.daily.pm25[0].avg} </p>

            </div>
        
    );
}

export default DisplayForecast;