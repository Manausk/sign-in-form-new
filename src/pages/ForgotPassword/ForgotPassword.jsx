import React from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const Navigate = useNavigate();
  return (
    <div className="ForgotContainer">
      <div className="ForgotWrapper">
        <h1>Forgot Password?</h1>
        <h1>No Worries</h1>
        <p>
          Take a chill pill , it happens sometime, just enter your email address
          or mobile number associated with your account.
        </p>
        <label for="username">Email address/Phone Number</label>
        <input type="text" placeholder="" />
        <button onClick={() => Navigate("/verification")} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
{
  /* <div className="container">
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
            {/* <button onClick={() => Navigate("/verification")} type="button">
              Submit
            </button> */
}
//         <button type="button">Submit</button>
//       </div>
//     </div>
//   </div>
// </div> */}
