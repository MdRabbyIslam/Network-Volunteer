// import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect, useState } from "react";
import "./userVolunteerList.css";
import { UserContext } from "../../App";
import Navbar from "../Navbar/Navbar";

const UserVolenteerList = () => {
  const [userInfo] = useContext(UserContext);
  const email = `${userInfo.email}`;
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    const fetching = () => {
      fetch(`http://localhost:5000/userVolunteerList?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAllEvent(data);
        });
    };
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancelEvent = (e, id) => {
    const target = e.target;
    console.log(target);
    console.log(id);
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
    <div>
      <Navbar showingAdminReg={false}></Navbar>
      <div className="all-event-container">
        {allEvent.map((userEvent) => (
          <div className="user-event-container" key={userEvent._id}>
            <div className="user-img-container">
              <img className="user-event-img" src={userEvent.banner} alt="" />
            </div>
            <div className="event-details">
              <h2>{userEvent.title}</h2>
              <br />
              <h4>{userEvent.date}</h4>
              <button
                onClick={(e) => {
                  handleCancelEvent(e, userEvent._id);
                }}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserVolenteerList;
