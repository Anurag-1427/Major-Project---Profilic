import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
          <Link to="news">News Section</Link>
          {/* <Link to="register">Register</Link>
          <Link to="login">Login</Link> */}
        </div>
        <div className="navbar-logo">Profilic Dashboard</div>
        <div className="weather_and_logout">weather and logout buttton</div>
      </div>
    </div>
  );
};

export default Navbar;
