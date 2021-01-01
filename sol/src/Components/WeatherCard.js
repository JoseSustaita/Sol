import React, { useState } from "react";

function WeatherCard(props) {
  const [responseObj, setResponseObj] = useState({});

  const getForecast = () => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=Immokalee",
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
      <button onClick={getForecast}>Click me</button>
      <div>{JSON.stringify(responseObj)}</div>
    </div>
  );
}

export default WeatherCard;
