import React, {useState} from 'react';
import "./DisplayResults.css";


function DisplayAQI(props){
    let recommendation;
    let aqi = props.aqi;

    //Display correct recommendation based on the AQI number, a value between 0 to 500. https://aqicn.org/data-platform/token-confirm/e17680fa-f491-4e54-8a68-a75ca19f810e
    if (aqi.data.aqi <= 50){ 
   recommendation = "The air quality is considered good, and air pollution poses little or no risk.";
    } else if (aqi.data.aqi <=100){
    recommendation = "The air quality is considered acceptable, however, active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
                }else if (aqi.data.aqi <=150){
                    recommendation = "The air quality is considered unhealthy for sensitive groups, but the general public is not likely to be affected.";
                    } else if (aqi.data.aqi <=200){
                    recommendation = "The air quality is considered unhealthy. Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
                    } else if (aqi.data.aqi <=300){
                        recommendation = "The air quality is considered very unhealthy. The entire population is likely to be affected. Go inside.";
                        } else {
                            recommendation = "The air quality is considered hazardous. Everyone may experience more serious health effects. Everyone should stay inside.";
                            }

        
       
    return (
        <div className="DisplayAQI">
            <h4>The AQI in {aqi.data.city.name} is: {aqi.data.aqi} </h4>
            <p>{recommendation}</p>
        </div>
    );
   
}

export default DisplayAQI;
