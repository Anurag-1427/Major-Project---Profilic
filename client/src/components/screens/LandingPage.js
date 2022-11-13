import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div className="viewport">
      <div className="navbar">
        <div className="logo">Profilic Web Application</div>
        <div className="nav_links">
          <ul>
            <div className="link">
              <Link to="landingpage">Home</Link>
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </div>
          </ul>
          <div className="hamburger_icon" onClick={openNav}>
            &#9776;
          </div>
          <div id="mySidenav" class="sidenav">
            <Link className="closebtn" onClick={closeNav}>
              &times;
            </Link>
            <Link to="landingpage">Home</Link>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
          </div>
        </div>
      </div>
      <div className="landing_screen">
        <div className="content">
          <h1>Welcome to Profilic Web Applicaition</h1>
          <p>One place for your major tasks.</p>
        </div>
      </div>
      <div className="footer">
        Copyright &copy; 2022; &nbsp;&nbsp; All Rights Reserved
      </div>
    </div>
  );
};

export default LandingPage;
