import React, {useState} from 'react';
import "./DisplayResults.css";



function DisplayForecast(props){

    let forecast = props.forecast; //passing forecast data from the API
    console.log(forecast.data.forecast.daily.pm25)


    
    return(
        
            <div className="DisplayForecast">
                <h4>The air quality forecast (particulate matter) for {forecast.data.city.name} is:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>AQI</th>
                            </tr>
                            { //Getting the pm25 value from the forecast
                             forecast.data.forecast.daily.pm25.map((elem, index) => (
                                //display days and average pm25 value
                                <tr>
                                    <td key={elem.index}>{elem.day}</td>
                                    <td key={elem.index}>{elem.avg}</td>

                                </tr>
                             ))
                            }



                        </tbody>
                    </table>
            </div>
        
    );
}

export default DisplayForecast;