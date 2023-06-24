import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SignIn from "./pages/SignIn/SignIn";
import Verification from "./pages/Verification/Verification";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
