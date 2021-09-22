import React, { useState, useEffect } from "react";
import Parameters from "./Parameters";
import WeatherCard from "./WeatherCard";

const Navbar = (props) => {
  const [whether, setWhether] = useState({});
  const [input, setinput] = useState("pune");
  const {setProgress} = props
  const fetchApi = async () => {
    try {
        setProgress(20)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=6648a1a243eb612b204c1e431efad6c8`
      );
      setProgress(50)
      const responseData = await response.json();
      const { country, sunset,sunrise } = responseData.sys;
      const {main:mainWeather,description,icon} = responseData.weather[0];
      setProgress(70)
      const {name}  = responseData;
      const {temp,humidity,pressure} = responseData.main;
      const {speed} = responseData.wind
      const newData = { country, sunset ,mainWeather,description,icon,name,temp,speed,sunrise,humidity,pressure};
      setProgress(100)
      setWhether(newData);
      console.log(whether.name);
    } catch (error) {
      console.log(error.message);
    }
  };

  const searchApi = (e) => {
    e.preventDefault()
    fetchApi();
  }
  const onChange = (event) => {
    setinput(event.target.value);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, []);

  let time = whether.sunset;
  let date = new Date(time * 1000)
  let timeStr = `${date.getHours() }:${date.getMinutes()}:${date.getSeconds() > "12" ? "PM" : "AM" }`
  let time2 = whether.sunrise;
  let date2 = new Date(time2 * 1000)
  let timeStr2 = `${date2.getHours() }:${date2.getMinutes()}:${date2.getSeconds() >"12" ? "PM" : "AM" }`
  return (
      <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Weather-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onChange} value={input} />
        <button className="btn btn-outline-success" type="submit" onClick={searchApi}>Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="container">
    <WeatherCard whether = {whether}/>
</div>
<div className="container d-flex flex-wrap justify-content-center">
    <Parameters whether={whether} input={input} title = {`${whether.temp}°C`} head="Temperature" bg="primary"/>
    <Parameters whether={whether} input={input} title = {`${whether.speed} km/h`} head="Wind-Speed" bg="danger"/>
    <Parameters whether={whether} input={input} title = {`${timeStr} `} head={`Sunset`} bg="success"/>
    <Parameters whether={whether} input={input} title = {`${timeStr2} `} head={`Sunrise`} bg="info"/>
    <Parameters whether={whether} input={input} title = {`${whether.humidity}°C`} head="Humidity" bg="secondary"/>
    <Parameters whether={whether} input={input} title = {`${whether.pressure} Pressure hPa`} head="Wind-Pressure" bg="secondary"/>
</div>
</>
  );
};

export default Navbar;
