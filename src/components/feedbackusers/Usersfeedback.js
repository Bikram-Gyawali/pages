import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Usersfeedback() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div>
        <strong>
          <h1 className="text-primary text-xl">
            What our users say about their online consultation experience?
          </h1>
        </strong>
      </div>
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
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-1  py-1">
          <div
            class="w-3/5 mx-auto rounded-lg bg-white shadow-lg px-1 pt-1 pb-1 text-gray-800"
            style={{ maxWidth: "500px" }}
          >
            <div class="w-full pt-1 pb-2">
              <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <p className="underlined font-ligt">Topic</p>
            <div class="w-full mb-1">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p class="text-sm text-gray-600 text-center px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">
                ..ram bahadur
              </p>
              <p class="text-xs text-gray-500 text-center">@ram.bahadur</p>
            </div>
          </div>
        </div>
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-1  py-1">
          <div
            class="w-3/5 mx-auto rounded-lg bg-white shadow-lg px-1 pt-1 pb-1 text-gray-800"
            style={{ maxWidth: "500px" }}
          >
            <div class="w-full pt-1 pb-2">
              <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <p className="underlined font-ligt">Topic</p>
            <div class="w-full mb-1">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p class="text-sm text-gray-600 text-center px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">
                ..ram bahadur
              </p>
              <p class="text-xs text-gray-500 text-center">@ram.bahadur</p>
            </div>
          </div>
        </div>
        <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-1  py-1">
          <div
            class="w-3/5 mx-auto rounded-lg bg-white shadow-lg px-1 pt-1 pb-1 text-gray-800"
            style={{ maxWidth: "500px" }}
          >
            <div class="w-full pt-1 pb-2">
              <div class="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <p className="underlined font-ligt">Topic</p>
            <div class="w-full mb-1">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p class="text-sm text-gray-600 text-center px-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">
                ..ram bahadur
              </p>
              <p class="text-xs text-gray-500 text-center">@ram.bahadur</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Usersfeedback;
