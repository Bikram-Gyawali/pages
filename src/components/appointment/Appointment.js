import React from "react";

function Appointment() {
  return (
    <div className="'mx-3 my-4">
      <div className="flex flex-row justify-between flex-wrap my-3 mx-3">
        <h1 className="font-semibold ">Book an appointment</h1>
        <a href="#all">View All</a>
      </div>
      <div>
        <div className="flex flex-row flex-wrap md:flex-wrap-reverse mx-3">
          <div className="flex flex-col mx-1 my-auto  min-w-150  items-start">
            <img
              src="/images/dr4.webp"
              className="h-40 w-11/12 rounded-3xl p-2"
              alt=""
            />
            <h1 className="font-semibold ml-3 text-sm ">Dr.Sanduik Ruit</h1>
            <small className="ml-3 text-sm text-gray-400">Eye Surgeon</small>
            <br />
            <a
              href="#0"
              className="ml-3 pt-3 text-sm text-blue-500"
              style={{ textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
          <div className="flex flex-col mx-1 my-auto  min-w-150  items-start">
            <img
              src="/images/dr2.jpeg"
              className="h-40 w-11/12 rounded-3xl p-2"
              alt=""
            />
            <h1 className="font-semibold ml-3 text-sm ">Dr.Sanduik Ruit</h1>
            <small className="ml-3 text-sm text-gray-400">Eye Surgeon</small>
            <br />
            <a
              href="#0"
              className="ml-3 pt-3 text-sm text-blue-500"
              style={{ textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
          <div className="flex flex-col mx-1 my-auto  min-w-150  items-start">
            <img
              src="/images/dr1.jpg"
              className="h-40 w-11/12 rounded-3xl p-2"
              alt=""
            />
            <h1 className="font-semibold ml-3 text-sm ">Dr.Sanduik Ruit</h1>
            <small className="ml-3 text-sm text-gray-400">Eye Surgeon</small>
            <br />
            <a
              href="#0"
              className="ml-3 pt-3 text-sm text-blue-500"
              style={{ textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
          <div className="flex flex-col mx-1 my-auto  min-w-150  items-start">
            <img
              src="/images/dr4.webp"
              className="h-40 w-11/12  rounded-3xl p-2"
              alt=""
            />
            <h1 className="font-semibold ml-3 text-sm ">Dr.Sanduik Ruit</h1>
            <small className="ml-3 text-sm text-gray-400">Eye Surgeon</small>
            <br />
            <a
              href="#0"
              className="ml-3 pt-3 text-sm text-blue-500"
              style={{ textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
          <div className="flex flex-col mx-1 my-auto  min-w-150  items-start">
            <img
              src="/images/dr4.webp"
              className="h-40 w-11/12  rounded-3xl p-2"
              alt=""
            />
            <h1 className="font-semibold ml-3 text-sm ">Dr.Sanduik Ruit</h1>
            <small className="ml-3 text-sm text-gray-400">Eye Surgeon</small>
            <br />
            <a
              href="#0"
              className="ml-3 pt-3 text-sm text-blue-500"
              style={{ textDecoration: "none" }}
            >
              Book an appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
