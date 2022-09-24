import {useEffect, useState} from "react";
import {get} from "../lib/api"

import ForecastItem from "./ForecastItem";



const Forecast = (props) => {
  // creating state that is used for rendering data
  const [forecastData, setForecastData] = useState(null);

  const getForecastData = (city) => {
    // retriving list of trip cities
    get(`/forecast?city=${city}`).then((response) => {
      const { status, data } = response;
      // console.log({ status, data });
      if (status === 200) {
        setForecastData(data)
      }
    });
  };

  useEffect(()=>{
    getForecastData("rome");
  },[])


  const getCurrentDgree =()=>{
    if (forecastData) {
      return forecastData.current
    }
  }
  
  const getCurrentCity =()=>{
    if (forecastData) {
      return forecastData.city
    }
  }

  const getForecastDays = () => {
    if (forecastData) {
      const { forecast } = forecastData;
      return forecast.map((data, index) => {
        const { degree, status } = data;
        return (
          <li key={`forecast-item-${index}`}>
            <ForecastItem day={index} degree={degree} status={status} />
          </li>
        );
      });
    }
  };

  return (
    <article>
      <div className="navigation-forecast-header">
        <span
          className="material-symbols-rounded"
          id="navigation-forecast-icon"
        >
          sunny
        </span>
        <div className="navigation-forecast-location">
          <h1>{`${getCurrentDgree()}°`}</h1>
          <div className="navigation-forecast-location-wrapper">
            <span className="material-symbols-rounded">near_me</span>
            <h3>{getCurrentCity()}</h3>
          </div>
        </div>
      </div>
      <div className="navigation-forecast-footer">
        <ul>{getForecastDays()}</ul>
      </div>
    </article>
  );
};

export default Forecast;
