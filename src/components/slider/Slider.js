import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <div className="mt-3 border-purple-200">
        <div className="flex  pt-3 mx-auto my-auto fles-between  space-x-10 -mb-12 ">
          <div className="mr-auto ml-4   ">
            <h1 className="text-lg my-auto  font-semibold ">
              Consulation for your problems{" "}
            </h1>
          </div>
          <div className="my-auto p-2 mr-3  rounded text-black">
            <a
              href="#r"
              className="mx-auto  "
              style={{ textDecoration: "none" }}
            >
              View All{" "}
            </a>
          </div>
        </div>
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
        className="mt-3 mx-auto border-top pt-3 pb-4 w-11/12"
        style={{ zIndex: "-1000" }}
      >
        <div className="cardCarosel ">
          <i class="fas fa-user-md"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Get doc</p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
        <div className="cardCarosel  rounded">
          <i class="fas fa-lungs-virus"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Lungs Problm</p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-teeth"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Check Teeths</p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-pills"></i>{" "}
          <p className="card-text text-sm pt-2 font-semibold ">Get Medicines</p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-x-ray"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Get Xray</p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Get doc </p>
          <p className="text-sm pt-1 self-start">Consult Now</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
