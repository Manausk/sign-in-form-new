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
          <div class="InputGroup">
            <div class="InputField">
              <label for="username">Email address</label>
              <input type="email" placeholder="" />
            </div>
            <div class="InputField">
              <label for="username">Password</label>
              <input type="password" placeholder="" />
            </div>

            <div class="content">
              <div class="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <div class="pass-link">Forgot password?</div>
            </div>
          </div>
          <div class="butnfield">
            <button type="button">Sign In</button>
          </div>
          <div class="another">
            <div class="line"></div>
            <p>Or continue with</p>
            <div class="line"></div>
          </div>
          <div class="butnfield2">
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
