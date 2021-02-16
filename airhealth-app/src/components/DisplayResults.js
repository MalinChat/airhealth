import React, {useState} from 'react';
import "./DisplayResults.css";

function DisplayResults(props){

    let aqi = props.aqi;


    return (
            <div className="DisplayResults">
                <p>The AQI in {aqi.data.city.name} is: </p>
                <h3>{aqi.data.aqi}</h3>
        
            </div>
           
    );

}

export default DisplayResults;
