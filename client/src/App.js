import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Activities from "./components/Activities";
import AddEcercise from "./components/AddEcercise";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import UserDetails from "./components/userDetails";
const App = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url("pic/bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100%",
        width: "auto",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/userDetails"
            element={isLoggedIn === "true" ? <UserDetails /> : <Gain />}
          />
          <Route path="/" element={<Gain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<AddEcercise />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
