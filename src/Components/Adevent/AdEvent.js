import React from "react";
import "./AdEvent.css";

const AdEvent = () => {
  return (
    <div>
      <form
        className="event-form"
        action="http://localhost:5000/addevents"
        method="POST"
      >
        <label className="item-1" htmlFor="event-title">
          Event Title : <br />
          <input
            type="text"
            name="eventTitle"
            id="event-title"
            placeholder="Enter Title"
          />
        </label>
        <label className="item-2" htmlFor="discription">
          Discription: <br />
          <textarea
            name="discription"
            id="discription"
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label className="item-3" htmlFor="event-date">
          Event Date: <br />
          <input type="date" name="eventDate" id="event-date" />
        </label>
        <label className="item-4" htmlFor="banner">
          Banner: <br />
          <input type="text" name="banner" id="banner" placeholder="banner" />
        </label>
        <label className="item-5" htmlFor="">
          <input type="submit" value="submit" />
        </label>
      </form>
    </div>
  );
};

export default AdEvent;
