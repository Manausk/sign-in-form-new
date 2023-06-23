import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="formbox">
        <h1 id="FP">Forgot Password?</h1>
        <h1 id="FPP">No Worries</h1>
        <p className="para">
          Take a chill pill , it happens sometime, just enter your email address
          or mobile number associated with your account.
        </p>
        <div className="another">
          <div className="InputField">
            <label for="username">Email address/Phone Number</label>
            <input type="text" placeholder="" />
          </div>
          <div className="butnfield">
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
