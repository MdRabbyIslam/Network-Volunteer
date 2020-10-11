import React, { useContext } from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const Event = (props) => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  //random color
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = "#" + randomColor;

  //handle Event function
  let history = useHistory();

  const handleEvent = (e) => {
    const target = e.target;
    const title = target.parentNode.childNodes[1].innerText;
    const newUser = { ...userInfo };
    newUser.title = title;
    newUser.banner = props.banner;
    setUserInfo(newUser);
    history.push("./register");
  };

  return (
    <div onClick={handleEvent} className="event-container">
      <img className="event-img" src={props.banner} alt="" />
      <h4 style={{ backgroundColor: color }} className="event-title">
        {props.title}
      </h4>
    </div>
  );
};

export default Event;
