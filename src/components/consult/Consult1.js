import React from "react";
import "./consult.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Consult1() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
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
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={10}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mt-3 border mb-20 top pt-3 pb-4 bg-light"
        style={{ zIndex: "-1000" }}
      >
        <div class="w-13 ">
          <div class="rounded shadow-lg ml-4 ">
            <img
              class=""
              src="/images/img4.jpeg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center  ">
              <div className="font-bold text-sm mb-1 ">Blood Test</div>
              <button className="bg-danger text-white text-sm rounded  p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13">
          <div class="rounded shadow-lg ml-4  ">
            <img
              class=""
              src="/images/test1.jpg"
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold text-sm mb-1 ">Blood Test</div>
              <button className="bg-danger text-white text-sm  rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test2.jpg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold text-sm mb-1 ">Blood Test</div>
              <button className="bg-danger text-white text-sm   rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test3.jpeg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold    text-sm mb-1">Blood Test</div>
              <button className="bg-danger text-white  text-sm rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test4.jpg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold    text-sm mb-1">Blood Test</div>
              <button className="bg-danger text-white  text-sm rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test5.jpg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold     text-sm mb-1">Blood Test</div>
              <button className="bg-danger text-white  text-sm rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test3.jpeg "
              style={{ height: "10em" }}
              v
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold     text-sm mb-1">Blood Test</div>
              <p className="bg-danger text-white  text-sm rounded p-1 mt-1 mb-2 mx-auto">
                Book Now>>
              </p>
            </div>
          </div>
        </div>
        <div class="w-13     ">
          <div class="rounded shadow-lg ml-4">
            <img
              class=""
              src="/images/test2.jpg "
              style={{ height: "10em" }}
              alt=""
            />
            <div class="px-6 flex flex-col items-center ">
              <div class="font-bold    text-sm mb-1">Blood Test</div>
              <button className="bg-danger text-white  text-sm rounded p-1 mt-1 mb-2 mx-auto">
                Book Now >>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Consult1;
