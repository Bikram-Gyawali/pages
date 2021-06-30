import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function NavBar() {
  const [bar, setBar] = useState(false);

  const hidebar = () => {
    setBar(false);
  };
  const getbar = () => {
    setBar(true);
  };

  return (
    <div style={{ zIndex: 10 }} className="">
      <div className="navbar flex flex-row justify-between  ">
        <div>
          <h1>Logo Name</h1>
        </div>
        <div className="flex flex-row text-left text-sm text-white mt-2 ">
          <div className="mx-3 ">
            <NavLink className="hover:no-underline hover:text-dark" to="/">
              <p className="home up font-medium ">Home</p>
            </NavLink>
          </div>
          <div className="mx-2">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-medium ">Book Appointment</p>
            </NavLink>
          </div>
          <div className="mx-2">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-medium ">Consult Onlilne</p>
            </NavLink>
          </div>
          <div className="mx-2">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-medium ">About us</p>
            </NavLink>
          </div>
          <div className="mx-2">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-medium ">Help and Support</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
