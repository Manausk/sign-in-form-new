import React from "react";
import "./Verification.css";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const Navigate = useNavigate();
  return (
    <div className="container">
      <h1>Verification</h1>
      {/* box */}
      <div className="Vrapper">
        <h1>Enter your OTP</h1>
        <form>
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
        </form>
        <button onClick={() => Navigate("/resetPassword")}>Verify</button>
        <h4>
          If you didn't receive a code. <a> Resend</a>
        </h4>
      </div>
    </div>
  );
};

export default Verification;

{
  /* <div className="formbox">
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
      {/* <button type="button" onClick={() => Navigate("/resetPassword")}>
              Verify
            </button> */
}
//     </div>
//     <p className="another2">
//       If you didn't receive a code<a> Resend</a>
//     </p>
//   </div>
// </div>; */}
