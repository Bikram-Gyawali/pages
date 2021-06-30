import React from "react";
import "./box.css";
function Box() {
  return (
    <div
      className="flex flex-row justify-center 
    -mt-12 resBox"
    >
      <div
        className=" flex flex-row   text-left bg-white shadow border  my-auto 
        boxes
        border-4 border-gray-100 p-3 rounded"
        style={{ zIndex: "1" }}
      >
        <img
          src="/images/dr1.jpg"
          className="imgRes h-16 w-16 rounded-full mx-4 mr-2"
          alt=""
        />
        <div className="my-auto mx-auto ">
          <h3 className=" font-bold hedText ">100+</h3>
          <h3 className="sm-Text">Doctors</h3>
        </div>
      </div>
      <div
        className=" flex flex-row  mx-4 text-left bg-white shadow border  my-auto 
        boxes
        border-4 border-gray-100 p-3 rounded"
        style={{ zIndex: "1" }}
      >
        <img
          src="/images/dr1.jpg"
          className="imgRes h-16 w-16 rounded-full mx-4 mr-2"
          alt=""
        />
        <div className="my-auto mx-auto ">
          <h3 className=" font-bold hedText ">100+</h3>
          <h3 className="sm-Text">Doctors</h3>
        </div>
      </div>
      <div
        className=" flex flex-row  text-left bg-white shadow border  my-auto 
        boxes
        border-4 border-gray-100 p-3 rounded"
        style={{ zIndex: "1" }}
      >
        <img
          src="/images/dr1.jpg"
          className="imgRes h-16 w-16 rounded-full  my-auto mx-4 mr-2"
          alt=""
        />
        <div className="my-auto mx-auto ">
          <h3 className=" font-bold hedText ">100+</h3>
          <h3 className="sm-Text">Doctors</h3>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Box;
