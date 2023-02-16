import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <Link
          className="navbar-brand pl-4 text-light"
          style={{ fontFamily: "Arial, sans-serif" }}
          to="/"
        >
          GAIN FITNESS
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse" + (isCollapsed ? "" : " show")}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-light " to="/activities">
                Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light " to="/about">
                About us
              </Link>
            </li>
            {isLoggedIn === "true" ? (
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link to="/add" className="btn btn-success">
                    Add Exercise Log
                  </Link>
                </li>
                <li>
                  <button className="btn btn-danger ml-2" onClick={logout}>
                    LogOut
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/register">
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
