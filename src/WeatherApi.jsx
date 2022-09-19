import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
const WeatherApi = () => {
  const [query, setQuery] = useState("");
  const [place, setPlace] = useState("");
  // console.log(place);
  const [temparature, setTemparature] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6326e6506b083c34b00a3e51dde32995&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTemparature(data.main.temp);
        setIcon(data.weather[0].icon);
        setDesc(data.weather[0].description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  function handleClick(e) {
     console.log("working");
    setPlace(e.target.value);
  }

  return (
    <div className="container">
      <form className="col-md-6 m-auto py-5 ">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City for Weather Information"
            onBlur={(e) => {
              setQuery(e.target.value);
              // e.preventDefault();
            }}
          />
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleClick}>
            Search
          </button>
        </div>
      </form>
      <div className="data-container p-3 my-3">
        <div className="my-1">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather-icon"
            style={{ width: 60, height: 60 }}
          />
        </div>
        <h1>{query}</h1>
        {/* <h2>{place}</h2> */}
        <h4>{temparature}°C </h4>
        <h5>{desc}</h5>
      </div>
    </div>
  );
};

export default WeatherApi;
