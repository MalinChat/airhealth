import React, {useState} from 'react';
import "./DisplayResults.css";


function DisplayAQI(props){
    let recommendation;
    let aqi = props.aqi;

    
    if (aqi.data.aqi <= 50){ 
   recommendation = "The air quality is considered good, and air pollution poses little or no risk";
    } else if (aqi.data.aqi <=100){
    recommendation = "The air quality is considered acceptable, however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.	Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
                }else if (aqi.data.aqi <=150){
                    recommendation = "The air quality is considered unhealthy for sensitive groups. The general public is not likely to be affected. Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.";
                    } else if (aqi.data.aqi <=200){
                    recommendation = "The air quality is considered unhealthy. Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects	Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion";
                    } else if (aqi.data.aqi <=300){
                        recommendation = "The air quality is considered very unhealthy. Health warnings of emergency conditions. The entire population is more likely to be affected.	Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.";
                        } else {
                            recommendation = "The air quality is considered hazardous. Everyone may experience more serious health effects. Everyone should avoid all outdoor exertion";
                            }
   
     /*   function errorHandler(aqi){
            if (aqi.data.city.name !== "undefined"){
                return true
            }
            return false
        }
        
*/
        
       
    return (
        <div className="DisplayAQI">

            <h4>The AQI in {aqi.data.city.name} is: {aqi.data.aqi} </h4>
            <p>Recommendation: {recommendation}</p>
        </div>
    );
   
}

export default DisplayAQI;
