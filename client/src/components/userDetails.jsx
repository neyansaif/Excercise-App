import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserData from "./UserData";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/userDetails", {
      method: "post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="text-light ">
        <div className="container my-5">
          <h1 className="text-center">
            {userData ? `Welcome ${userData}` : "Loading..."}
          </h1>
          <p className="text-center">
            We're glad you're here. Start your Exercise Today!
          </p>
        </div>

        <center>
          <Link to="/add" className=" btn btn-success btn-lg">
            Add Exercise Log
          </Link>
        </center>
        <center className="py-5">
          <h2>Previous Records:</h2>
        </center>
        <UserData />
      </div>
    </div>
  );
};

export default UserDetails;
