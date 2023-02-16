import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:2000/login", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          // alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        } else {
          alert("Invalid password or email");
        }
      });
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-9 col-md-9 col-lg-5 mx-auto">
            <div className=" text-light card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center p-4">Sign In</h5>
                <form className="form-signin" onSubmit={submit}>
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="form-control"
                      placeholder="Email address"
                      required=""
                    />
                  </div>
                  <label htmlFor="inputPassword">Password</label>
                  <div className="form-label-group form-group">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="form-control"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div className=" p-2">
                    <small>We'll never share your data.</small>
                  </div>
                  <button
                    className="btn btn-lg btn-success btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                </form>
                <hr className="my-4" />
                <hr className="my-4" />
                <small>Don't have a account? </small>
                <Link to="/register" type="submit">
                  sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
