import React from "react";
import { Button } from "react-bootstrap";
import "./homepage.css";
import Slider from "../slider/Slider";
import Testimonial from "../testimonial/Testimonial";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Appstore from "../appstorecard/Appstore";
import Usersfeedback from "../feedbackusers/Usersfeedback";
function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="imgbox " style={{ zIndex: "-1" }}>
        <img
          src="/images/img1.jpg"
          className="img-responsive"
          width="100%"
          height="auto"
          alt=""
        />
        <div className="textblock-img">
          <h4 className="text-dark">
            Free Home Sample Get lab tests and full body checkups from the
            comfort of your home.
          </h4>
          <p>
            Get
            <strong className="mx-2 text-green-400 ">50%</strong>
            discount
          </p>
          <Button variant="primary" className="p-1 ">
            Schedule Appointnment >>
          </Button>
        </div>
      </div>

      {/* <div
        class="bg-cover bg-center  h-auto text-dark py-24 px-10 object-fill"
        style={{
          backgroundImage: "url(/images/img1.jpg)",
        }}
      >
        <div class="md:w-1/2">
          <p class="font-bold text-lg uppercase">Services</p>
          <p class="text-3xl font-bold">Medical Service </p>
          <p class="text-2xl mb-10 leading-none">
            Atractive designs for your brand
          </p>
          <a
            href=";"
            class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-dark hover:text-gray-800 no-underline"
          >
            Contact us
          </a>
        </div>
      </div> */}
      <div className="package-cards">
        <Card />
        <Slider />
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
            <Button variant="primary" className="p-1  btn ">
              Schedule Appointnment >>
            </Button>
          </div>
        </div>
        <Testimonial />
        <Usersfeedback />
        <Appstore />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
