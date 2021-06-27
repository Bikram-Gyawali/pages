import React from "react";
import Navbar from "../navbar/Navbar";
// import { Button } from "react-bootstrap";
import "./consult.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Consult1 from "./Consult1";
import Consult2 from "./Consult2";
import Statictable from "../statictable/Statictable";
import Benifittable from "../benefites/Benifittable";
import Usersfeedback from "../feedbackusers/Usersfeedback";
import Faq from "../faq/Faq";
import Footer from "../footer/Footer";
import Appstore from "../appstorecard/Appstore";
function Consult() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Navbar style={{ zIndex: "1" }} />
      <div
        className="imgbox border-t-4 border-b-4  border-purple-200 "
        style={{ zIndex: "-1" }}
      >
        <img
          src="/images/banner1.jpg"
          className="img-responsive"
          width="100%"
          height="auto"
          alt=""
        />
      </div>
      <div className="mt-3 border-purple-200">
        <div className="flex  pt-3 mx-auto  bg-danger space-x-10 ">
          <div className="mr-auto ml-4 pb-2  ">
            <h1 className="text-xl my-auto -ml-1 font-semibold">
              30+ Specialists
            </h1>
            <small className="text-sm my-auto -ml-1 ">
              Consult with top doctors with your own specialilsts
            </small>
          </div>
          <div className="my-auto p-2 mr-3  bg-light rounded">
            <button className="mx-auto ">See all Specialists>></button>
          </div>
        </div>
        <div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={100}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="mt-3 border top pt-3 pb-4 bg-light"
            style={{ zIndex: "-1000" }}
          >
            <div class="w-13 ">
              <div class="rounded shadow-lg ml-4 ">
                <img
                  class=""
                  src="/images/img4.jpeg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13">
              <div class="rounded shadow-lg ml-4  ">
                <img
                  class=""
                  src="/images/test1.jpg"
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test2.jpg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test3.jpeg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test4.jpg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test5.jpg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test3.jpeg "
                  style={{ height: "7em" }}
                  v
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
            <div class="w-13     ">
              <div class="rounded shadow-lg ml-4">
                <img
                  class=""
                  src="/images/test2.jpg "
                  style={{ height: "7em" }}
                  alt=""
                />
                <div class="px-3  flex flex-col items-center  ">
                  <div className="font-bold text-sm mb-1   tracking-tight">
                    Dr.Acharya
                  </div>
                  <p className="text-gray-700  text-sm  tracking-tight ">
                    Rs 300
                  </p>
                  <button className=" bg-danger rounded w-24 text-white text-sm  tracking-tight p-1 mt-1 mb-2 mx-auto">
                    Consult Now >>
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <br />
        <div className="mt-3 border-purple-200">
          <div className="flex  pt-3 mx-auto  bg-light space-x-10 ">
            <div className="mr-auto ml-4 pb-2  ">
              <h1 className="text-xl my-auto -ml-1 font-semibold ">
                Common Health Conserns
              </h1>
              <p className="text-sm my-auto  pt-2 -ml-1 font-medium text-red-500 ">
                Consult a doctor online for any health issue
              </p>
            </div>
            <div className="my-auto p-2 mr-3  bg-danger rounded text-white">
              <button className="mx-auto  ">See all Symptoms>></button>
            </div>
          </div>
        </div>
      </div>
      <Consult1 />
      <Consult2 />
      <Statictable />
      <Benifittable />
      <Usersfeedback />
      <Faq />
      <div className="mt-3 border-purple-200">
        <div className="flex  py-6 mx-auto bg-light space-x-10 ">
          <div className="mr-auto ml-4 pb-2  ">
            <h1 className="text-xl my-auto -ml-1 font-semibold ">
              Still delaying your health concerns ?{" "}
            </h1>
            <p className="text-sm my-auto  pt-2 -ml-1 font-medium text-red-500 ">
              Connect with our top doctors online{" "}
            </p>
          </div>
          <div className="my-auto p-2 mr-3  bg-danger rounded text-white">
            <button className="mx-auto  ">Consult Now</button>
          </div>
        </div>
      </div>
      <Appstore />
      <Footer />
    </div>
  );
}

export default Consult;
