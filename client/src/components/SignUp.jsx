import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(name, email, password);
    fetch("http://localhost:2000/register", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("User Registered")
        }
        else if(data.error === "User Already Exists"){
          alert("User Already Exists")
        } else {
          alert("Invalid Inputs")
        }
      });
  }

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="text-light shadow">
              <div className="card-body">
                <h3 className="text-center m-4">Sign Up</h3>
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Password"
                    />
                  </div>
                  <button
                    className="btn btn-lg btn-success btn-block text-uppercase"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
                <hr />

                <small>Already registered?   </small>
                <Link to="/login" type="submit">
                 
                  sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
