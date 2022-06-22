import React from "react";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import "./home.css";
import Nav from "../Nav/Nav";
const Home = () => {
  return (
    <div className="home-container container">
      <Nav />
      <div className="row">
        <div className="col-lg-6 welcome-col col-md-6 col-sm-12">
          <h2>Welcome to your</h2>
          <h2>professional community</h2>
          <div className="links">
            <Link to="/">
              Search for a job <FcNext />
            </Link>
            <Link to="/">
              Find a person you know <FcNext />
            </Link>
            <Link to="/">
              Learn a new skill <FcNext />
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 cover-img"></div>
      </div>
    </div>
  );
};

export default Home;
