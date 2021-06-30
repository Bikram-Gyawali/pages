import React from "react";
import "./homepage.css";
import Slider from "../slider/Slider";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import Box from "../box/Box";
import Appointment from "../appointment/Appointment";
import Testimonial from "../testimonials/Testimonial";

function Homepage() {
  return (
    <div className="">
      <Nav />
      <div className="">
        <header class=" custom-img flex items-center justify-center   flex-col ">
          <div class="flex flex-col justify-center text-white  ">
            <p
              class="mx-auto textOne"
              style={{
                wordSpacing: "5px",
                letterSpacing: "0.3px",
              }}
            >
              Book appointments and consult online easily.
            </p>
            <p
              class=" 
              smText
               mx-auto "
              style={{
                // width: "400px",
                paddingTop: "18px",
                paddingBottom: "18px",
                // fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Its now easier than ever stay healthy.No need to stay in line just{" "}
              to get appoiintments or consultations
            </p>
          </div>
          <div
            className="search-box w-4/12"
            style={{ fontFamily: "Popins", letterSpacing: "0.6px" }}
          >
            <div
              class=" 
            inputBox
            input-group mb-3 search-categories "
            >
              <i class="fas fa-map-marker-alt text-lg text-white mr-2 mt-1 "></i>
              <select
                id="basic-addon1 bg-light search-categories"
                class="form-select input-group-text w-1/4 bg-light border "
                aria-label="Default select example"
              >
                <option selected="selected ">Select Location</option>
                <option>Nepal</option>
                <option value="1">Kathmandu</option>
                <option value="2">Butwal</option>
                <option value="3">Gulmi</option>
              </select>

              {/* <span class="input-group-text" id="basic-addon1"> */}
              {/* <i class="fas fa-search input-group-text" id="basic-addon1"></i> */}
              {/* {/* </span> */}

              <input
                type="text"
                class="form-control w-1/5"
                placeholder="Search doctors near your location"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-append">
                <span class="input-group-text bg-light" id="basic-addon2">
                  <i class="fas fa-search "></i>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <Box />
      <div className="mx-4">
        <Slider />
        <Appointment />
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
}

export default Homepage;
