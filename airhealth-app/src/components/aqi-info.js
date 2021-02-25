import "./AQI-Info.css";


function AQIInfo() {
    //This is the box that holds the AQI info. 
return (

<div className="AQIInfo">
    
 
    <div class="accordion">

      <div>
          <input type="checkbox" 
          name="example_accordion" 
          id="section1" 
          class="accordion_input"/>
           <label for="section1" 
            class="accordion_label">What is Air Quality Index (AQI)?</label>
            <div class="accordion_content">
            <p class="info_text"> An air quality index (AQI) is used to communicate how polluted the air currently is or how polluted it is forecast to become. Public health risks increase as the AQI rises. </p>
            </div>
          
    </div>
    <div>
        <input type="checkbox" 
        name="example_accordion" 
        id="section2" 
        class="accordion_input"/>
        <label for="section2" 
        class="accordion_label">How is a community’s AQI calculated
        and reported?</label>
        <div class="accordion_content">
          <p class="info_text"> Monitors record concentrations of the major pollutants at a specific location. These raw measurements are converted into a separate AQI 
            value for each pollutant (ground-level ozone, particle pollution, carbon monoxide, and sulfur dioxide). Different countries have sligthly different indexes.</p>
         </div>
          
    </div>
    <div>
        <input type="checkbox" 
        name="example_accordion" 
        id="section3" 
        class="accordion_input"/>
        <label for="section3" 
        class="accordion_label">Why is air quality important? </label>
        <div class="accordion_content">
          <p class="info_text">Local air quality affects how you live and breathe. Like the weather, it can change from day to day or even hour to hour. The AQI is designed to provide simple information about your
          local air quality and how it may affect your health.</p>
         </div>
          
    </div>

    <div>
        <input type="checkbox" 
        name="example_accordion" 
        id="section4" 
        class="accordion_input"/>
        <label for="section4" 
        class="accordion_label">What do the values mean? </label>
        <div class="accordion_content">
          <p class="info_text">The purpose of the AQI is to help you understand what local air quality means to your health. To make it easier to understand, the AQI is divided into six levels of health concern: Good (AQI under 50), Moderate (AQI under 100), Unhealthy for sensitive groups (AQI under 150), Unhealthy (AQI under 200), Very Unhealthy (AQI under 300) and Hazardous (AQI under 500). </p>
         </div>
          
    </div>
    </div>





</div>
    
);



}

export default AQIInfo;