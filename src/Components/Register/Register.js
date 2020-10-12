import React, { useContext, useState } from "react";
import "./Register.css";
import logo from "../Images/logos/Group 1329.png";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [userInfo] = useContext(UserContext);
  const [result, setReslt] = useState({
    name: userInfo.name,
    email: userInfo.email,
    banner: userInfo.banner,
    discription: "I love you keya rani",
    title: userInfo.title,
    date: new Date().toLocaleDateString(),
  });

  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    const registerInfo = { ...result };
    registerInfo[name] = value;
    setReslt(registerInfo);
  };
  const handleOnSubmit = (e) => {
    const { name, email, discription, title, date, banner } = result;
    const finalResult = { name, email, discription, title, date, banner };
    e.preventDefault();
    fetch("https://frozen-anchorage-84492.herokuapp.com/addVolunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalResult),
    }).then((res) => {
      history.push("/userVolunteerList");
    });
  };

  return (
    <div className="register-container">
      <img className="logo" src={logo} alt="" />
      <form onSubmit={handleOnSubmit} className="register">
        <h2>Register as a Volunteer</h2>
        <input
          type="text"
          name="name"
          id="name"
          value={result.name}
          onChange={handleOnChange}
          placeholder="Enter Your Full Name"
        />
        <input
          type="text"
          name="email"
          id="email"
          value={result.email}
          onChange={handleOnChange}
          placeholder="Your Email"
        />
        <input
          type="date"
          name="date"
          id="date"
          value={result.date}
          onChange={handleOnChange}
          placeholder="Date:"
        />
        <input
          type="text"
          name="discription"
          id="discription"
          value={result.discription}
          onChange={handleOnChange}
          placeholder="Discription"
        />
        <input
          type="text"
          name="title"
          value={result.title}
          onChange={handleOnChange}
          placeholder="Organize books at the library"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
