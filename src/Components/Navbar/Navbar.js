import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Images/logos/Group 1329.png";
import { UserContext } from "../../App";

const Navbar = (props) => {
  const { showingAdminReg } = props;
  const [userInfo] = useContext(UserContext);
  return (
    <div>
      <div className="navigation-bar">
        <div>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="link">
            Home
          </Link>

          <Link to="/userVolunteerList" className="link">
            Events
          </Link>
          <Link to="/blog" className="link">
            Blog
          </Link>
          <Link to="/donation" className="link">
            Donetion
          </Link>
          {showingAdminReg === true && (
            <Link to="/register" className="link reg-link">
              Register
            </Link>
          )}
          {showingAdminReg === true && (
            <Link to="/admin" className="link admin-link">
              Admin
            </Link>
          )}
          {userInfo.name && (
            <p style={{ color: "royalBlue" }}>{userInfo.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
