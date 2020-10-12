import React, { useEffect, useState } from "react";
import "./Home.css";
import Event from "../Event/Event";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [allEvent, setAllEvent] = useState([]);
  useEffect(() => {
    fetch("https://frozen-anchorage-84492.herokuapp.com/allevents")
      .then((res) => res.json())
      .then((data) => {
        setAllEvent(data);
      });
  }, []);

  return (
    <div className="home">
      <Navbar showingAdminReg={true}></Navbar>
      <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
      <div className="search-container">
        <input type="search" name="search" id="search" placeholder="search" />
        <button>search</button>
      </div>

      <div className="all-events-container">
        {allEvent.map((event) => (
          <Event
            banner={event.banner}
            title={event.eventTitle}
            key={event._id}
          ></Event>
        ))}
      </div>
    </div>
  );
};

export default Home;
