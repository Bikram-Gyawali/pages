import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10,
      slidesToSlide: 0, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="align-center mt-16">
      <div className="">
        <div className="flex flex-row justify-between flex-wrap my-3 mx-8">
          <h1 className="font-semibold ">Consulations for your problem</h1>
          <a href="#all">View All</a>
        </div>
      </div>
      <Carousel
        swipeable={"desktop" ? false : true}
        draggable={true}
        showDots={"mobile" ? false : true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={100}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mt-3 pt-1  pb-4 mx-8 "
        style={{ zIndex: "-1000" }}
      >
        <div className="cardCarosel ">
          <i class="fas fa-user-md"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel  rounded">
          <i class="fas fa-lungs-virus"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-teeth"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-pills"></i>{" "}
          <p className="card-text text-sm pt-2 font-semibold ">Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-x-ray"></i>
          <p className="card-text text-sm pt-2 font-semibold ">Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
        <div className="cardCarosel ">
          <i class="fas fa-syringe"></i>
          <p className="card-text text-sm pt-2 font-semibold "> Covid 19</p>
          <a
            className="text-sm pt-1 self-start text-primary hover:no-underline"
            href="#q"
          >
            Consult Now
          </a>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
