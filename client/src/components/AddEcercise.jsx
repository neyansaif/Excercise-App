import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddEcercise = () => {
  const [name, setName] = useState("");
  const [description, setDiscription] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  let navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    console.log(name, description, activity, duration, date);
    fetch("http://localhost:2000/form", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        description,
        activity,
        duration,
        date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Exercise Added Sucessfully");
        } else {
          alert("Invalid Inputs");
        }
      });
    navigate("/UserDetails");
  }
  return (
    <div>
      <div className="container text-light col-md-6 my-5">
        <h1 className="text-center">Add Exercise</h1>
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
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
              rows={3}
              placeholder="Enter a description of your exercise"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="activity">Activity Type</label>
            <select
              className="form-control"
              onChange={(e) => {
                setActivity(e.target.value);
              }}
              name="activity"
            >
              <option>Choose...</option>
              <option>Run</option>
              <option>Bicycle Ride</option>
              <option>Swim</option>
              <option>Walk</option>
              <option>Hike</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="form-control"
              name="duration"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="Enter the duration of your exercise (in minutes)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              name="date"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add Exercise
          </button>
          <br />
        </form>
        <Link
          to="/userDetails"
          type="submit"
          className="btn btn-secondary mt-2"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default AddEcercise;
