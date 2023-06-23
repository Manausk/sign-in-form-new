import React from "react";
import "./Verification.css";

const Verification = () => {
  return (
    <div className="container">
      <div className="verification">
        <p>Verification</p>
      </div>
      <div className="formbox">
        <p className="para">Enter your OTP</p>
        <div className="another">
          <div className="butnfield">
            <input type="number" placeholder=" " />
            <input type="number" placeholder=" " />
            <input type="number" placeholder=" " />
            <input type="number" placeholder=" " />
          </div>
          <div className="butnfield2">
            <button type="button">Verify</button>
          </div>
          <p className="another2">
            If you didn't receive a code<a> Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
