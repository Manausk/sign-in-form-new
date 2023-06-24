import React from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="ResetContainer">
      <h1>Its almost done </h1>
      <h1>New Password</h1>
      <div className="ResetWrapper">
        <label for="username">Enter new password</label>
        <input type="text" placeholder="" />
        <label for="username" className="label2">
          Confirm password
        </label>
        <input type="text" placeholder="" />
        <button onClick={() => navigate("/")}>Submit</button>
      </div>
    </div>
  );
};

export default ResetPassword;

// <div className="reset">
//   <div className="heading">
//     <h1>It's almost done</h1>
//     <p>New Password</p>
//   </div>
//   <div className="form">
//     <form>
//       <div className="InputGroup">
//         <div className="InputField">
//           <label for="username">Enter new password</label>
//           <input type="password" placeholder="" />
//         </div>
//         <div className="InputField">
//           <label for="username">Confirm Password</label>
//           <input type="password" placeholder="" />
//         </div>
//       </div>
//       <div className="butnfield">
//         <button type="button">Submit</button>
//         {/* <button type="button" onClick={() => navigate("/")}>
//           Submit
//         </button> */}
//       </div>
//     </form>
//   </div>
// </div>
