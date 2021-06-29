import React from "react";

function Box() {
  return (
    // <div className="mx-auto">
    <div className="flex flex-row flex-wrap  -mt-12">
      <div className=" flex flex-row w-1/5 justify-around mx-auto bg-white border border-4 border-gray-100 p-3 rounded">
        <img
          src="/images/dr1.jpg"
          className="h-16 w-16 rounded-full mr-2"
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold">100+</h3>
          <p>Doctors</p>
        </div>
      </div>
      <div className=" flex flex-row w-1/5 justify-around  mx-auto bg-light border border-4 border-gray-100 p-3 rounded">
        <img
          src="/images/dr1.jpg"
          className="h-16 w-16 rounded-full mr-2"
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold">100+</h3>
          <p>Doctors</p>
        </div>
      </div>
      <div className=" flex flex-row w-1/5 justify-around  mx-auto bg-light border border-4 border-gray-100 p-3 rounded">
        <img
          src="/images/dr1.jpg"
          className="h-16 w-16 rounded-full mr-2"
          alt=""
        />
        <div>
          <h3 className="text-lg font-bold">100+</h3>
          <p>Doctors</p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Box;
