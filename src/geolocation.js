import axios from "axios";
import React, { useState } from "react";
function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2962506766620332d7bd1780f3fbe4c1`
      );
      setData(response.data);
      setCity("");
    } catch (err) {
      alert("please enter the right city");
      setCity("");
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h1>WEATHER</h1>
        <div className="row">
          <input
            className="input"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchData}>GET</button>
        </div>
        {data && (
          <div className="data">
            <h2>
              CITY:{data.name},{data.sys.country},<br />
              TEMP:{data.main.temp}ºF
              <br />
              LONGITUDE:{Math.round(data.coord.lon)},<br />
              LATTITUDE:{Math.round(data.coord.lat)},<br />
              WEATHER:{data.weather[0].main}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default Weather;