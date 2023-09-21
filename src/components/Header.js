import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="logo.jpg" alt="" className="logo_img" />
          Car Rental
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Vechcle Models</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="heightlight_signin">
              Sign In
            </a>
          </li>
          <li>
            <a href="#" className="heightlight_register">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
