import React from "react";
import "./AllVolunteer.css";
import { useEffect } from "react";
import { useState } from "react";
import trash from "../Images/logos/trash-2 9.png";

const AllVolunteer = (props) => {
  const [allVolunteer, setAllVolunteer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allVolunteerList")
      .then((res) => res.json())
      .then((data) => {
        setAllVolunteer(data);
      });
  }, []);

  const handleDeleteVolunteer = (e, id) => {
    const target = e.target;
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          target.parentNode.parentNode.style.display = "none";
        }
      });
  };

  return (
    <div className="all-volunteer-container">
      <div className="volunteer-heading">
        <p>Name</p>
        <p>Email ID</p>
        <p>Ragistering Date</p>
        <p>Volunteer list</p>
        <p style={{ textAlign: "center" }}>Action</p>
      </div>

      {allVolunteer.map((volunteer) => (
        <div className="volunteer-container" key={volunteer._id}>
          <h5>{volunteer.name}</h5>
          <h5>{volunteer.email}</h5>
          <h5>{volunteer.date}</h5>
          <h5>{volunteer.title}</h5>
          <h5
            onClick={(e) => handleDeleteVolunteer(e, volunteer._id)}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <img className="delete-volunteer" src={trash} alt="" />
          </h5>
        </div>
      ))}
    </div>
  );
};

export default AllVolunteer;
