import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdEvent.css";

const AdEvent = () => {
  const [result, setResult] = useState({
    eventTitle: "",
    discription: "",
    eventDate: new Date().toLocaleDateString(),
    banner: "",
  });

  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const addInfo = { ...result };
    addInfo[name] = value;
    setResult(addInfo);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { eventTitle, discription, banner, eventDate } = result;
    const finalResult = { eventTitle, eventDate, discription, banner };
    fetch("https://frozen-anchorage-84492.herokuapp.com/addevents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalResult),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      });
  };
  return (
    <div>
      <form className="event-form" onSubmit={handleOnSubmit}>
        <label className="item-1" htmlFor="event-title">
          Event Title : <br />
          <input
            type="text"
            name="eventTitle"
            id="event-title"
            value={result.title}
            onChange={handleOnChange}
            placeholder="Enter Title"
          />
        </label>
        <label className="item-2" htmlFor="discription">
          Discription: <br />
          <textarea
            name="discription"
            id="discription"
            value={result.discription}
            onChange={handleOnChange}
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label className="item-3" htmlFor="event-date">
          Event Date: <br />
          <input
            type="date"
            name="eventDate"
            value={result.date}
            onChange={handleOnChange}
            id="event-date"
          />
        </label>
        <label className="item-4" htmlFor="banner">
          Banner: <br />
          <input
            type="file"
            name="banner"
            value={result.banner}
            onChange={handleOnChange}
            id="banner"
            placeholder="banner"
          />
        </label>
        <label className="item-5" htmlFor="">
          <input type="submit" value="submit" />
        </label>
      </form>
    </div>
  );
};

export default AdEvent;
