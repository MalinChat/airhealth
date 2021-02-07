import "/aqi-info.css";


function AQIInfo() {

return (

<div className="AQIInfo">
    
    <button onClick={getCity} type="button">Get city</button>
    <button type="button" class="collapsible">What is Air Quality Index (AQI)?</button>
    <div class="content">
      <p>Lorem ipsum...</p>
      </div>
    <button type="button" class="collapsible">How is a community’s AQI calculated
    and reported? </button>
    <div class="content">
      <p>Lorem ipsum...</p>
      </div>
    <button type="button" class="collapsible">Why is air quality important? </button>
    <button type="button" class="collapsible">What do the values mean?</button>




</div>
    
);



}

export default AQIInfo;