import React, { useState } from "react";
import Conditions from "./Conditions";

function WeatherCard(props) {
  const [responseObj, setResponseObj] = useState({});
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("imperial");

  const getForecast = () => {
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=${unit}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "89e132cf9bmshfe6bfc2827c6637p1aa47djsn782fa2ab458e",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Conditions responseObj={responseObj} />
      <form>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
      </form>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
}

export default WeatherCard;
