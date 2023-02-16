import React from "react";
import { Link } from "react-router-dom";
import Activities from "./Activities";

function HomePage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: " 100vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 text-light">
                <h2>Today Actions are tomorrow Results</h2>
              <Link
                to="/login"
                type="button"
                className="btn btn-success btn-lg btn-block"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                type="button"
                className="btn btn-secondary btn-lg btn-block"
              >
                Register
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <Activities/>
    </div>
  );
}

export default HomePage;
