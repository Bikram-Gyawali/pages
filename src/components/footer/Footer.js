import React from "react";

function Footer() {
  return (
    <div>
      <footer class="text-gray-400 body-font mt-40 pt-10 bg-blue-900  ">
        <div class="container  py-24 mx-auto flex   flex-wrap md:flex-wrap-reverse  flex-col">
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">Logo Name</div>
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">
              <h2 class="title-font text-left font-bold  text-white tracking-widest text-sm mb-3">
                Your data
              </h2>
              <nav class="list-none mb-10 text-left ">
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm "
                    href="-"
                  >
                    How we handle your data?
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Your data privacy
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">
              <h2 class="title-font text-left font-bold  text-white tracking-widest text-sm mb-3">
                For Doctors
              </h2>
              <nav class="list-none mb-10 text-left ">
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Register a doctor
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Guidelines
                  </a>
                </li>
                <li>
                  <a
                    class=" text-gray-400 hover:text-gray-800 hover:no-underline font-medium align-left text-sm"
                    style={{ textDecoration: "none !important" }}
                    href="-"
                  >
                    Repoting threats
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">
              <h2 class="title-font text-left font-bold  text-white tracking-widest text-sm mb-3">
                For Patients
              </h2>
              <nav class="list-none mb-10 text-left ">
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Book an appointment
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Consult with a doctor
                  </a>
                </li>
                <li>
                  <a
                    class=" text-gray-400 hover:text-gray-800 hover:no-underline font-medium align-left text-sm"
                    style={{ textDecoration: "none !important" }}
                    href="-"
                  >
                    Reporting Supuscions
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Patienet Support
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">
              <h2 class="title-font text-left font-bold  text-white tracking-widest text-sm mb-3">
                Help and Support
              </h2>
              <nav class="list-none mb-10 text-left ">
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Patient Helpdesk
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Doctor Helpdesk
                  </a>
                </li>
                <li>
                  <a
                    class=" text-gray-400 hover:text-gray-800 hover:no-underline font-medium align-left text-sm"
                    style={{ textDecoration: "none !important" }}
                    href="-"
                  >
                    Frequently Asked Questions
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6  md:w-1/2 w-full px-2">
              <h2 class="title-font text-left font-bold  text-white tracking-widest text-sm mb-3">
                About Us
              </h2>
              <nav class="list-none mb-10 text-left ">
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Our History{" "}
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-400 hover:text-gray-800 font-thin align-left text-sm"
                    href="-"
                  >
                    Working Principle
                  </a>
                </li>
                <li>
                  <a
                    class=" text-gray-400 hover:text-gray-800 hover:no-underline font-medium align-left text-sm"
                    style={{ textDecoration: "none !important" }}
                    href="-"
                  >
                    Our Team
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="pb-12 text-3xl text-white">
          <h1>Bringing a change to the world,one step at a time</h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
