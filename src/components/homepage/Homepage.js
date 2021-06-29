import React from "react";
import { Button } from "react-bootstrap";
import "./homepage.css";
import Slider from "../slider/Slider";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import Box from "../3cards/Box";
import Appointment from "../appointment/Appointment";
import Testimonial from "../testimonials/Testimonial";

function Homepage() {
  return (
    <div>
      <Nav />
      <div className="mx-auto ">
        <header class=" custom-img flex items-center justify-center  pb-12 flex-col">
          <div class="font-serif mx-4  text-center md:p-8 w-2/5  text-white ">
            <p class="font-bold mt-4 mx-auto text-3xl w-4/5 line1 ">
              Book appointments and consult online easily
            </p>
            <small class="line2 text-lg font-thin pt-3 mt-2">
              Its now easier than ever stay healthy.No need to stay in line just{" "}
              to get appoiintments or consultations
            </small>
          </div>
          <div className="search-box w-6/12">
            <div class="input-group mb-3 search-categories ">
              <i class="fas fa-map-marker-alt text-lg text-white mr-2 mt-1 "></i>
              {/* <svg
                class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg> */}
              {/* <select
                id="basic-addon1 bg-light"
                class="form-select input-group-text w-1/5 bg-gray border border-gray-300  text-dark-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                aria-label="Default select example"
              >
                <option>Nepal</option>
                <option selected value="1">
                  Kathmandu
                </option>
                <option value="2">Butwal</option>
                <option value="3">Gulmi</option>
              </select> */}

              <select
                id="basic-addon1 bg-light search-categories"
                class="form-select input-group-text w-1/5 bg-light border "
                aria-label="Default select example"
              >
                <option selected="selected ">Select Here</option>
                <option>Nepal</option>
                <option value="1">Kathmandu</option>
                <option value="2">Butwal</option>
                <option value="3">Gulmi</option>
              </select>

              {/* <span class="input-group-text" id="basic-addon1"> */}
              {/* <i class="fas fa-search input-group-text" id="basic-addon1"></i> */}
              {/* </span> */}

              <input
                type="text"
                class="form-control w-2/5"
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
      <Slider />
      {/* <div className="package-cards">
        <Card />
        <div
          className="imgbox mt-3 border-t-4 border-b-4 border-purple-200 "
          style={{ zIndex: "-1" }}
        >
          <img
            src="/images/img3.jpg"
            className="img-responsive"
            width="100%"
            height="auto"
            alt=""
          />
          <div className="textblock-img mr-4">
            <h4 className="text-dark">
              Free Home Sample Get lab tests and full body checkups from the
              comfort of your home.
            </h4>
            <p>
              Get
              <strong className="mx-2 text-info">50%</strong>
              discount
            </p>
            <button className="p-1  btn btn-primary ">
              Schedule Appointnment >>
            </button>
          </div>
        </div>


      </div> */}
      <Appointment />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Homepage;
