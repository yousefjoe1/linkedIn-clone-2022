import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ useremail: "", password: "" });

  const handlechange = (e) => {
    let theUser = user;
    theUser[e.target.id] = e.target.value;
    setUser(theUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dachboard");
  };

  return (
    <div className="signin-container container-fluid">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt=""
        />
      </Link>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Sign in</h2>
          <h5>Stay updated</h5>
          <label htmlFor="useremail">Eamil:</label>
          <br />
          <input
            placeholder="just click sign in button"
            id="useremail"
            onChange={(e) => handlechange(e)}
            type="email"
          />
          <br />
          <label htmlFor="pass">Password:</label>
          <br />
          <input
            id="password"
            onChange={(e) => handlechange(e)}
            type="password"
          />
          <br />
          <Link to="/forgetpass">forget password?</Link>
          <button>Sign in</button>
        </form>
        <div className="new-to-linked text-center">
          New to LinkedIn ? <Link to="/join">Join now</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
