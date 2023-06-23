import React from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset">
      <div className="heading">
        <h1>It's almost done</h1>
        <p>New Password</p>
      </div>
      <div className="form">
        <form>
          <div className="InputGroup">
            <div className="InputField">
              <label for="username">Enter new password</label>
              <input type="password" placeholder="" />
            </div>
            <div className="InputField">
              <label for="username">Confirm Password</label>
              <input type="password" placeholder="" />
            </div>
          </div>
          <div className="butnfield">
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
