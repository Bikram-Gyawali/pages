import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
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
      <div className="navbar my-auto flex flex-row justify-between">
        <div className="">
          <div onClick={getbar}>
            <i class="fas fa-bars "></i>
          </div>
        </div>

        <div className="flex flex-row text-left text-sm text-white ">
          <div className="mx-3 ">
            <NavLink className="hover:no-underline hover:text-dark" to="/">
              <p className="home up font-bold ">Home</p>
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-bold ">Book Appointment</p>
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-bold ">Consult Onlilne</p>
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-bold ">About us</p>
            </NavLink>
          </div>
          <div className="mx-3">
            <NavLink
              className="hover:no-underline hover:text-dark"
              to="/consult"
            >
              <p className="home up font-bold ">Help and Support</p>
            </NavLink>
          </div>
        </div>
      </div>
      <Sidebar hidebar={hidebar} getbar={getbar} bar={bar} />
    </div>
  );
}

export default NavBar;
