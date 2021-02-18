import React, {useState} from 'react';
import "./DisplayResults.css";



function DisplayForecast(props){

    let forecast = props.forecast;
    console.log(forecast.data.forecast.daily.pm25)


    
    return(
        
            <div className="DisplayForecast">
                <p>The air quality forecast for {forecast.data.city.name} is:</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>AQI</th>
                            </tr>
                            {
                             forecast.data.forecast.daily.pm25.map(elem => (
                            
                                <tr>
                                    <td key={elem.forecast}>{forecast.data.forecast.daily.pm25[0].day}</td>
                                    <td key={elem.forecast}>{forecast.data.forecast.daily.pm25[0].avg}</td>

                                </tr>
                             ))
                            }



                        </tbody>
                    </table>
            </div>
        
    );
}

export default DisplayForecast;