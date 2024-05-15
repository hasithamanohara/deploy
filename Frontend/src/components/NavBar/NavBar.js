import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social network icons
import "../../Css/NavBar.css"; // Make sure you create a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Catagory</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/Aboutus">About Us</Link>
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
