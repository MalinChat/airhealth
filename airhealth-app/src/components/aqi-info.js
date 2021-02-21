import "./AQI-Info.css";


function AQIInfo() {
//<button onClick={getCity} type="button">Get city</button>
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
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         </div>
          
    </div>
    </div>





</div>
    
);



}

export default AQIInfo;