import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import PasswordReset from "./pages/ForgotPassword/PasswordReset";
import PhoneOtp from "./pages/OTP/PhoneOtp";
import Product from "./pages/Products/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/phoneotp" element={<PhoneOtp/>}/>
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
