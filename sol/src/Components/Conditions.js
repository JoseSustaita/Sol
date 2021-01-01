import React from "react";

const Conditions = (props) => {
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}.png`}
          />
          <p>
            Temp {Math.round(props.responseObj.main.temp)} and {""}
            {props.responseObj.weather[0].description}
          </p>
          <p> Feels Like {props.responseObj.main.feels_like}</p>
          <p>Humidity:{props.responseObj.main.humidity}%</p>
          <p>
            {Math.round(props.responseObj.main.temp_min)}/
            {Math.round(props.responseObj.main.temp_max)}
          </p>
          <p>Low/High</p>
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;
