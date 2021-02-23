import React, {useState} from 'react';
import "./DisplayResults.css";



function DisplayForecast(props){

    let forecast = props.forecast;
    console.log(forecast.data.forecast.daily.pm25)


    
    return(
        
            <div className="DisplayForecast">
                <h4>The air quality forecast for {forecast.data.city.name} is:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>AQI</th>
                            </tr>
                            {
                             forecast.data.forecast.daily.pm25.map((elem, index) => (
                            
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