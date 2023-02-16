import { useState, useEffect } from "react";

const UserData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Make a request to the server to retrieve form data for the current user
      const response = await fetch("http://localhost:2000/userData");
      const data = await response.json();
      setFormData(data);
    };

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setFormData((prevState) =>
          prevState.filter((formData) => formData._id !== id)
        );
      } else {
        throw new Error("Failed to delete exercise");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {formData.map((exercise) => (
            <div
              className="card bg-transparent col-12 col-md-5 mx-auto"
              key={exercise._id}
            >
              <div className="card-body">
                <h5 className="card-title">Logged Exercise</h5>
                <hr />
                <p className="card-text">
                  <strong>Name</strong> = {exercise.name}. <br />
                  <strong>Description</strong>: {exercise.description}. <br />
                  <strong>Activity type</strong>: {exercise.activity}.
                  <br />
                  <strong>Duration</strong>: {exercise.duration} minutes. <br />
                  <strong>Date</strong>: {exercise.date}.
                  <br />
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(exercise._id)}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;
