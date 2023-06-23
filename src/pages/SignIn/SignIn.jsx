import React from "react";
import "./SignIn.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="heading">
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>
      </div>
      <div className="form">
        <form>
          <div className="InputGroup">
            <div className="InputField">
              <label for="username">Email address</label>
              <input type="email" placeholder="" />
            </div>
            <div className="InputField">
              <label for="username">Password</label>
              <input type="password" placeholder="" />
            </div>

            <div className="content">
              <div className="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div className="pass-link">Forgot password?</div>
            </div>
          </div>
          <div className="butnfield">
            <button type="button">Sign In</button>
          </div>
          <div className="another">
            <div className="line"></div>
            <p>Or continue with</p>
            <div className="line"></div>
          </div>
          <div className="butnfield2">
            <button type="button">
              <FaFacebookF />
            </button>
            <button type="button">
              <BsGoogle />
            </button>
            <button type="button">
              <FaFacebookF />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
