import React from "react";
import "./testimonial.css";
function Testimonial() {
  return (
    <div>
      <div className="bg-blue-900 py-20">
        <div className="flex flex-row  box1 ">
          <div className="mx-auto w-3/12 pl-4  text-left">
            <span className="text-gray-700 text-sm   ">We care about you</span>
            <p className="font-medium text-2xl text-white">
              Trusted by more than 100+ doctors and 1000+ patients
            </p>
          </div>
          <div className="testimonial flex flex-row  box2  w-11/12 justify-around">
            <div className="w-4/12  bg-light border rounded-lg p-2  ">
              <div className="flex flex-row justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-11 -ml-3 rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left ">
                  <h2 className="text-xl">Dr.Sanduk Ruit</h2>
                  <small>Eye Surgeon</small>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class=" mb-2 resp text-justify text-sm leading-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid odio asperiores sapiente provident, consequuntur,
                delectus explicabo quaerat blanditiis praesentium expedita id
                culpa quas temporibus! Omnis maxime laboriosam accusantium
                numquam repudiandae!
              </p>
            </div>
            <div className="w-4/12  bg-light border rounded-lg p-2  ">
              <div className="flex flex-row justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-11 -ml-3 rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left ">
                  <h2 className="text-xl">Dr.Sanduk Ruit</h2>
                  <small>Eye Surgeon</small>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class=" mb-2 resp text-justify  text-sm leading-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid odio asperiores sapiente provident, consequuntur,
                delectus explicabo quaerat blanditiis praesentium expedita id
                culpa quas temporibus! Omnis maxime laboriosam accusantium
                numquam repudiandae!
              </p>
            </div>
            {/* <div className="w-4/12  bg-light border rounded-lg p-2  ">
              <div className="flex flex-row justify-evenly">
                <img
                  src="/images/dr4.webp"
                  className="h-20 w-20 text-left -mt-14 -ml-3 rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-left ">
                  <h2 className="text-xl">Dr.Sanduk Ruit</h2>
                  <small>Eye Surgeon</small>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="block w-5 h-5 text-gray-400 mb-2"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class=" mb-2 resp text-justify  text-sm leading-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid odio asperiores sapiente provident, consequuntur,
                delectus explicabo quaerat blanditiis praesentium expedita id
                culpa quas temporibus! Omnis maxime laboriosam accusantium
                numquam repudiandae!
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
