import React from "react";
import "./testimonial.css";
import vector from "./Vector.png";
function Testimonial() {
  return (
    <div className="bigBox">
      <div
        className="py-20"
        style={{
          // backgroundColor: "rgba(45, 73, 144, 1)",
          background: "rgba(45, 73, 144, 1)",
          backgroundImage: `url(${vector})`,
          backgroundPositionX: "160px",
          backgroundPositionY: "250px",
          backgroundSize: "130px 140px ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="flex flex-row  box1 ">
          <div className="boxLeft  text-left my-auto">
            <h3
              className="text-white w-2/3"
              style={{ fontSize: "10px", fontFamily: "Poppins " }}
            >
              Trusted by more than 100+ doctors and 1000+ patients{" "}
            </h3>
            <p
              className=" text-white"
              style={{
                width: "195px",
                fontSize: "28px",
                fontWeight: "500",
              }}
            >
              What our users say about us ?
            </p>
          </div>
          <div className="boxRight my-auto mx-auto flex flex-row   box2  w-11/12 justify-around">
            {/* <div
              className="bg-svg"
              // style={{ fontSize: "400px",  }}
              style={{
                backgroundImage: `url(${vector})`,
                backgroundColor: "rgba(45, 73, 144, 1)",
                height: "300px",
                width: "300px",
                backgroundPosition: "center",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
              }}
            >
              ....
            </div> */}

            <div
              className="w-4/12  bg-light border mt-16 rounded-lg p-2   "
              style={{ width: "300px", height: "215px" }}
            >
              <div className="flex flex-col justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-14 mx-auto rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left mx-auto ">
                  <h2
                    className=""
                    style={{
                      fontWeight: "200",
                      height: "12px",
                      fontSize: "18px",
                    }}
                  >
                    Dr.Sanduk Ruit
                  </h2>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 "
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative", transform: "rotate(180deg)" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p
                class=" mb-2 mx-auto px-4 text-left  "
                style={{
                  fontSize: "15px",
                  letterSpacing: "0px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                ad deleniti doloribus iure eligendi porro maiores laudantium
                dicta corrupti possimus.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 -mt-5  ml-60"
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
            </div>

            <div
              className="w-4/12  bg-light border mt-16 rounded-lg p-2   "
              style={{ width: "300px", height: "215px" }}
            >
              <div className="flex flex-col justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-14 mx-auto rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left mx-auto ">
                  <h2
                    className=""
                    style={{
                      fontWeight: "200",
                      height: "12px",
                      fontSize: "18px",
                    }}
                  >
                    Dr.Sanduk Ruit
                  </h2>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 "
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative", transform: "rotate(180deg)" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p
                class=" mb-2 mx-auto px-4 text-left  "
                style={{
                  fontSize: "15px",
                  letterSpacing: "0px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                ad deleniti doloribus iure eligendi porro maiores laudantium
                dicta corrupti possimus.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 -mt-5  ml-60"
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
            </div>

            <div
              className="w-4/12  bg-light border mt-16 rounded-lg p-2   "
              style={{ width: "300px", height: "215px" }}
            >
              <div className="flex flex-col justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-14 mx-auto rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left mx-auto ">
                  <h2
                    className=""
                    style={{
                      fontWeight: "200",
                      height: "12px",
                      fontSize: "18px",
                    }}
                  >
                    Dr.Sanduk Ruit
                  </h2>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 "
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative", transform: "rotate(180deg)" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p
                class=" mb-2 mx-auto px-4 text-left  "
                style={{
                  fontSize: "15px",
                  letterSpacing: "0px",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                ad deleniti doloribus iure eligendi porro maiores laudantium
                dicta corrupti possimus.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class=" w-5 h-5  text-gray-300 -mt-5  ml-60"
                viewBox="0 0 975.036 975.036"
                style={{ position: "relative" }}
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
