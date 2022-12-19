import React, { useState } from "react";
import { Popover, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};
export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="infoContainer">
      <img className="infoIcon" src={WeatherInfoIcons[name]} />
      <span className="infoLabel">
        1{value}
        <span className="infoLabel_2">{name}</span>
      </span>
    </div>
  );
};

const Navbar = () => {
  // For Weather API
  const API_KEY = "49f2c6c8095834f529a33b050691da2f";
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

    const response = await axios.get(url);
    // console.log(response);
    updateWeather(response.data);
  };

  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  // For Popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // For Sidebar
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="hamburger_icon-nav" onClick={openNav}>
          &#9776;
        </div>
        <div id="mySidenav" className="sidenav2">
          <Link className="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <Link to="/">Dashboard</Link>
          <Link to="/news">News Section</Link>
          <Link to="/calculator">Calculator</Link>
          {/* <Link to="login">Login</Link> */}
        </div>
        <div className="navbar-logo">Profilic Dashboard</div>

        <div className="weather_and_logout" onClick={handleClick}>
          weather
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            <div className="popover_outside">
              <div className="cityLabel">Find Weather of your City</div>

              <form className="serachBox" onSubmit={fetchWeather}>
                <input
                  className="searchBox_input"
                  placeholder="City"
                  onChange={(e) => updateCity(e.target.value)}
                />
                <button className="searchBox_button" type="submit">
                  Search
                </button>
              </form>
              {weather ? (
                <>
                  <div className="weather_condition">
                    <span className="condition">
                      <span className="condition_2">{`${Math.floor(
                        weather?.main?.temp - 273
                      )}°C`}</span>
                      {`| ${weather?.weather[0].description}`}
                    </span>
                    <img
                      className="weather_logo"
                      src={WeatherIcons[weather?.weather[0].icon]}
                    />
                  </div>
                  <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>
                  <span className="weatherInfoLabel">Weather Info</span>
                  <div className="weatherInfoContainer">
                    {/* <div className="weatherInfoComponent"></div>
                <div className="weatherInfoComponent"></div>
                <div className="weatherInfoComponent"></div>
                <div className="weatherInfoComponent"></div> */}
                    <WeatherInfoComponent
                      name={isDay ? "sunset" : "sunrise"}
                      value={`${getTime(
                        weather?.sys[isDay ? "sunset" : "sunrise"]
                      )}`}
                    />
                    <WeatherInfoComponent
                      name="humidity"
                      value={weather?.main?.humidity}
                    />
                    <WeatherInfoComponent
                      name="wind"
                      value={weather?.wind?.speed}
                    />
                    <WeatherInfoComponent
                      name="pressure"
                      value={weather?.main?.pressure}
                    />
                  </div>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
