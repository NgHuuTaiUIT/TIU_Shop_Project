import React, { useState } from "react";
import PropTypes from "prop-types";

import logo from "../assets/images/logo.png";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { Link } from "react-router-dom";
const LoginPopUp = props => {
  const [side, setSide] = useState(0);

  const styleNone = {
    display: "none"
    // opacity: 0,
    // visibility: "hidden"
  };

  return (
    <div className="login">
      <div className="login__popup" style={side !== 0 ? styleNone : {}}>
        <div className="login__logo">
          <img src={logo} alt="" />
        </div>
        <div className="login__close">
          <i className="bx bx-x"></i>
        </div>
        {/* <h3 className="login__title">Sign Inot Your Account</h3> */}
        <div className="login__section">
          <Button className="login__section__login" onClick={() => setSide(0)}>
            Login
          </Button>
          <Button
            className="login__section__register"
            onClick={() => setSide(1)}>
            Register
          </Button>
        </div>
        <div className="login__form">
          <div className="login__form__username">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login__form__password">
            <input type="password" placeholder="Password" />
            <i className="bx bxs-eyedropper"></i>
          </div>
          <div className="login__form__remember">
            <CheckBox label="Remember me" />
            <Link to="#">Forgot password?</Link>
          </div>
          <Button className="login__form__btn">Login</Button>
        </div>
        <div className="login__social__list">
          <span>Or Login With</span>
          <ul>
            <li>
              <i className="bx bxl-facebook"></i>
            </li>
            <li>
              <i className="bx bxl-twitter"></i>
            </li>
            <li>
              <i className="bx bxl-google"></i>
            </li>
            <li>
              <i className="bx bxl-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="register__popup" style={side === 0 ? styleNone : {}}>
        <div className="register__logo">
          <img src={logo} alt="" />
        </div>
        <div className="register__close">
          <i className="bx bx-x"></i>
        </div>
        {/* <h3 className="register__title">Sign Inot Your Account</h3> */}
        <div className="register__section">
          <Button
            className="register__section__register"
            onClick={() => setSide(0)}>
            Login
          </Button>
          <Button
            className="register__section__register"
            onClick={() => setSide(1)}>
            Register
          </Button>
        </div>
        <div className="register__form">
          <div className="register__form__username">
            <input type="text" placeholder="Username" />
          </div>
          <div className="register__form__username">
            <input type="text" placeholder="Username" />
          </div>
          <div className="register__form__password">
            <input type="password" placeholder="Password" />
            <i className="bx bxs-eyedropper"></i>
          </div>
          <div className="register__form__password">
            <input type="password" placeholder="Password" />
            <i className="bx bxs-eyedropper"></i>
          </div>

          <Button className="register__form__btn">Register</Button>
        </div>
        <div className="register__social__list">
          <span>Or Login With</span>
          <ul>
            <li>
              <i className="bx bxl-facebook"></i>
            </li>
            <li>
              <i className="bx bxl-twitter"></i>
            </li>
            <li>
              <i className="bx bxl-google"></i>
            </li>
            <li>
              <i className="bx bxl-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

LoginPopUp.propTypes = {};

export default LoginPopUp;
