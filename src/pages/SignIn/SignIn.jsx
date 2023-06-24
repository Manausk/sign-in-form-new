import React from "react";
import "./SignIn.css";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="SignIn">
      <h1>Welcome Back</h1>
      <h2>Sign in to your account</h2>
      <form>
        <div className="SignWrapper">
          <label className="label" for="username">
            Email address
          </label>
          <input className="input" type="text" placeholder="" />
          <label className="label" for="username">
            Password
          </label>
          <input className="input" type="password" placeholder="" />
          <div className="breakLine">
            <div className="checkBox">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a
              onClick={() => navigate("/forgotPassword")}
              className="pass-link"
            >
              Forgot password?
            </a>
          </div>
          <button className="SignBtn">Sign In</button>
          <div className="Continue">
            <div className="line"></div>
            <p>Or continue with</p>
            <div className="line"></div>
          </div>
          <div className="btns">
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
        </div>
      </form>
    </div>
  );
};

export default SignIn;

{
  /* <div className="signIn">
    //   <div className="heading">
    //     <h1>Welcome Back</h1>
    //     <p>Sign in to your account</p>
    //   </div>
    //   <div className="form">
    //     <form>
    //       <div className="InputGroup">
    //         <div className="InputField">
    //           <label for="username">Email address</label>
    //           <input type="email" placeholder="" />
    //         </div>
    //         <div className="InputField">
    //           <label for="username">Password</label>
    //           <input type="password" placeholder="" />
    //         </div>

    //         <div className="content">
    //           <div className="checkbox">
    //             <input type="checkbox" id="remember-me" />
    //             <label for="remember-me">Remember me</label>
    //           </div>
    //           <div */
}
//             // onClick={() => navigate("/forgotPassword")}
//             className="pass-link"
//           >
//             Forgot password?
//           </div>
//           {/* <div
//             onClick={() => navigate("/forgotPassword")}
//             className="pass-link"
//           >
//             Forgot password?
//           </div> */}
//         </div>
//       </div>
//       <div className="butnfield">
//         <button type="button">Sign In</button>
//       </div>
// <div className="another">
//   <div className="line"></div>
//   <p>Or continue with</p>
//   <div className="line"></div>
// </div>
//       <div className="butnfield2">
//         <button type="button">
//           <FaFacebookF />
//         </button>
//         <button type="button">
//           <BsGoogle />
//         </button>
//         <button type="button">
//           <FaFacebookF />
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
