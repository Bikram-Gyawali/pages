import React from "react";
import "./consult.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Consult2() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <>
      <div>
        <h1 className=" text-xl font-bold underline z-auto">
          Some Card Topics
        </h1>
      </div>
      <div className="flex respCard">
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
          className="bg-light z-0"
        >
          <div class="flex items-center h-screen w-full justify-center ">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Heart
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>3+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Kidney
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>5+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Skin
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Dentist
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Cancer
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Cancer
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Dentist
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="/images/dr1.jpg"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                    Dr.Mahesh yadav
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>
                      Specialist:
                      <strong class="text-center text-dark text-xs font-bold">
                        {" "}
                        Dentist
                      </strong>
                    </p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Hospital
                        </td>
                        <td class="px-2 py-2">New Kanti Hospital </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Experience:
                        </td>
                        <td class="px-2 py-2">
                          <strong>2+</strong> years
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Ratings:
                        </td>
                        <td class="px-2 py-2">
                          <i class="fas fa-star text-yellow-500"></i> 4/5{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p class="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p class="leading-relaxed">
                      Vice migas literally kitsch +1 pok pok. Truffaut hot
                      chicken slow-carb health goth, vape typewriter.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p class="leading-relaxed">
                      Coloring book nar whal glossier master cleanse umami.
                      Salvia +1 master cleanse blog taiyaki.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p class="leading-relaxed">
                      VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                      Kinfolk bespoke try-hard cliche palo santo offal.
                    </p>
                  </div>
                </div>
                <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p class="leading-relaxed">
                      Pitchfork ugh tattooed scenester echo park gastropub
                      whatever cold-pressed retro.
                    </p>
                  </div>
                </div>
              </div>
              <img
                class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="/images/img7.jpg"
                alt="step"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Consult2;
