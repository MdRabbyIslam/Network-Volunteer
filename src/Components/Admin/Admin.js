import React, { useState } from "react";
import "./Admin.css";
import logo from "../Images/logos/Group 1329.png";
import AdEvent from "../Adevent/AdEvent";
import AllVolunteer from "../AllVolunteer/AllVolunteer";

function Admin() {
  const [selectedBtn, setSelectedBtn] = useState({
    btn: "addEventBtn",
  });

  const handleSelectBtn = (event) => {
    const id = event.target.id;
    if (id === "registerBtn") setSelectedBtn({ btn: "registerBtn" });
    if (id === "addEventBtn") setSelectedBtn({ btn: "addEventBtn" });
  };

  return (
    <div className="admin">
      <div className="top-bar">
        <img className="logo" src={logo} alt="" />
        <h2>Add Event </h2>
      </div>
      <div className="main">
        <div className="sidebar">
          <button onClick={handleSelectBtn} id="registerBtn">
            Volunteer Register List
          </button>
          <button onClick={handleSelectBtn} id="addEventBtn">
            + Add Event
          </button>
        </div>
        <div style={{ margin: " 0 auto", width: "75%" }}>
          {selectedBtn.btn === "addEventBtn" ? (
            <AdEvent></AdEvent>
          ) : (
            <AllVolunteer></AllVolunteer>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
