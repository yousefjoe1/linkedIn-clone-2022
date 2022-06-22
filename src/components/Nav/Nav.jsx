import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="container global-nav">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt=""
        />
      </Link>
      <ul>
        <Link to="/join">Join Now</Link>
        <Link to="/signin">Sign In</Link>
      </ul>
    </nav>
  );
};

export default Nav;
