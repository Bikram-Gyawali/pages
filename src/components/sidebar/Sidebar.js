import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div
      onClick={props.hidebar}
      className={props.bar ? "overlay open" : "overlay"}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        id="mySidenav"
        className={props.bar ? "sidenav open" : "sidenav "}
      >
        <span
          className="closebtn"
          style={{
            color: "tomato",
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={props.hidebar}
        >
          <i className="fas fa-times"></i>
        </span>
        <div className="text-blue-900 text-left items-start">
          <Link to="/about">Consult</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">About us</Link>
          <Link to="/contact">Help and Support</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
