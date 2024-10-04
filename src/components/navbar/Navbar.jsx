import React from "react";
// import logo from "./assets/tracom_services_cover.jpg";
import { Link } from "react-router-dom";
// import "./App.css";

function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        {/* <img src={logo} alt="tracom-logo" className="main-logo" /> */}
        <ul id="main-nav-ul">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className="search">
            <Link to="/registration" className="btn">
              Register
            </Link>

            <Link
              to="/login"
              className="btn2"
              style={{
                marginLeft: "50px",
              }}
            >
              Login
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
