
# Air Health App

This is a student project that was created at[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### This is Malin's presentation

https://app.pitch.com/app/presentation/38d66f20-559a-4e06-9dd2-0056d4cf0181/2894dbe3-9744-4c49-b159-86f4e33d1442

##### AQI-Info: Air Quality Open Data Platform

Get your token here: https://aqicn.org/data-platform/token/#/

###### Challenges

The Air Quality Index is a value calculated based on different pollutants:  (PM2.5, PM10, NO2, CO, SO2, Ozone). When you request the AQI for a location, you get the AQI. However, when you request a forecast, you get the forecast for the pollutant PM2.5, particulate matter, not the same AQI that you get when you request only AQI. This is because of limitations in the API data. 

####### Feature Extension Ideas

Create a box that displays the AQI number together with recommendation and color
Add text recommendations (IE good quality, unhealthy etc) in the forecast section
Calculate the real AQI in the forecast, I think it is possible to get an estimate of this, but you'd need to research AQIs further.
