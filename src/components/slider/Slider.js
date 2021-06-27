import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
import Feature from "../feature/Feature";
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
      <div className="mt-3 bg-primary p-4 border-b-4">
        <h1>
          <strong>Our Sevices</strong>
        </h1>
      </div>
      <div className="mt-3 border-purple-200">
        <div className="flex  pt-3 mx-auto  bg-light space-x-10 ">
          <div className="mr-auto ml-4 pb-2  ">
            <h1 className="text-xl my-auto -ml-1 font-semibold ">
              Consult top doctors online for any health concern{" "}
            </h1>
            <p className="text-sm my-auto  pt-2 -ml-1 font-medium text-red-500 ">
              Private online consultations with verified doctors in all
              specialists{" "}
            </p>
          </div>
          <div className="my-auto p-2 mr-3  bg-danger rounded text-white">
            <button className="mx-auto  ">View All Specialaists>></button>
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
        className="mt-3 border top pt-3 pb-4"
        style={{ zIndex: "-1000" }}
      >
        <div className="cardCarosel border">
          <i class="fas fa-user-md"></i>
          <p className="card-text">Get doc</p>
        </div>
        <div className="cardCarosel border rounded">
          <i class="fas fa-lungs-virus"></i>
          <p className="card-text">Get Lungs Verified</p>
        </div>
        <div className="cardCarosel border">
          <i class="fas fa-teeth"></i> <p className="card-text">Check Teths</p>
        </div>
        <div className="cardCarosel border">
          <i class="fas fa-pills"></i>{" "}
          <p className="card-text">Get Medicines</p>
        </div>
        <div className="cardCarosel border">
          <i class="fas fa-x-ray"></i> <p className="card-text">Get Xray</p>
        </div>
        <div className="cardCarosel border">
          <i class="fas fa-syringe"></i> <p className="card-text">Get doc</p>
        </div>
      </Carousel>
      <Feature />
    </div>
  );
}

export default Slider;
