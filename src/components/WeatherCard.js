import React from "react";

const WeatherCard = (props) => {
  var date = new Date();
  var hour = date.getHours() % 12 || 12;
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var time = hour + ":" + min + ":" + sec;
  const { whether } = props;
  return (
    <div>
        <div className="container text-light text-center">
        <h1>Weather-App</h1>
      </div>
      <div className="card text-center bg-warning text-light my-3">
        <div className="card-header">{`Country: ${whether.country}`}</div>
        <div className="card-body">
          <h3 className="card-title">{whether.name}</h3>
          <h4 className="card-text">{`Weather of the ${whether.name}: ${whether.description}`}</h4>
        </div>
        <div className="card-footer text-light">Last updated at: {time}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
