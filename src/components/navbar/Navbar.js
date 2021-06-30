// import React from "react";
// import "./navbar.css";
// function Navbar() {
//   return (
//     <div style={{ zIndex: "6" }}>
//       <div class="wrapper m-b-3">
//         <nav>
//           <input type="checkbox" id="show-search" />
//           <input type="checkbox" id="show-menu" />
//           <label for="show-menu" class="menu-icon">
//             <i class="fas fa-bars"></i>
//           </label>
//           <div class="content">
//             <div class="logo">
//               <a href="/">Logo</a>
//             </div>
//             <ul class="links">
//               <li>
//                 <a href="/consult">Consult</a>
//               </li>
//               <li>
//                 <a href="#">Doctors</a>
//               </li>
//               <li>
//                 <a href="#" class="desktop-link">
//                   Bookings
//                 </a>
//                 <input type="checkbox" id="show-features" />
//                 <label for="show-features">Features</label>
//                 <ul>
//                   <li>
//                     <a href="#">Drop Menu 1</a>
//                   </li>
//                   <li>
//                     <a href="#">Drop Menu 2</a>
//                   </li>
//                   <li>
//                     <a href="#">Drop Menu 3</a>
//                   </li>
//                   <li>
//                     <a href="#">Drop Menu 4</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#" class="desktop-link">
//                   Services
//                 </a>
//                 <input type="checkbox" id="show-services" />
//                 <label for="show-services">Services</label>
//                 <ul>
//                   <li>
//                     <a href="#">Drop Menu 1</a>
//                   </li>
//                   <li>
//                     <a href="#">Drop Menu 2</a>
//                   </li>
//                   <li>
//                     <a href="#">Drop Menu 3</a>
//                   </li>
//                   <li>
//                     <a href="#" class="desktop-link">
//                       More Items
//                     </a>
//                     <input type="checkbox" id="show-items" />
//                     <label for="show-items">More Items</label>
//                     <ul>
//                       <li>
//                         <a href="#">Sub Menu 1</a>
//                       </li>
//                       <li>
//                         <a href="#">Sub Menu 2</a>
//                       </li>
//                       <li>
//                         <a href="#">Sub Menu 3</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="#1" className="text-xs">
//                   <small>Login/Signup</small>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <label for="show-search" class="search-icon">
//             <i class="fas fa-search"></i>
//           </label>
//           <form action="#" class="search-box">
//             <input
//               type="text"
//               placeholder="Type Something to Search..."
//               required
//             />
//             <button type="submit" class="go-icon">
//               <i class="fas fa-long-arrow-alt-right"></i>
//             </button>
//           </form>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { NavLink } from "react-router-dom";
// import "./navbar.css";
function NavBar() {
  const [bar, setBar] = useState(false);

  const hidebar = () => {
    setBar(false);
  };
  const getbar = () => {
    setBar(true);
  };

  return (
    <div style={{ zIndex: 10 }} className="mb-40 ">
      <div>
        <div className="navbar  flex flex-row justify-between  ">
          <div className="left-nav">
            <div onClick={getbar}>
              <i class="fas fa-bars "></i>
            </div>
          </div>

          <div className=" flex flex-row my-auto text-left ">
            <div className="mx-3 ">
              <NavLink className="hover:no-underline hover:text-dark" to="/">
                <p className="home up font- ">Doctors</p>
                <small className="small mt-4 ">Consult a doctor</small>
              </NavLink>
            </div>
            <div className="mx-3">
              <NavLink
                className="hover:no-underline hover:text-dark"
                to="/consult"
              >
                <p className="home up font-medium ">Consult</p>
                <small className="small mt-4 ">Consult a doctor</small>
              </NavLink>
            </div>
            <div className="mx-3">
              <NavLink
                className="hover:no-underline hover:text-dark"
                to="/consult"
              >
                <p className="home up font-medium ">Pharmacy</p>
                <small className="small mt-4 ">Consult a doctor</small>
              </NavLink>
            </div>
            <div className="mx-3">
              <NavLink
                className="hover:no-underline hover:text-dark"
                to="/consult"
              >
                <p className="home up font-medium ">Diagonistics</p>
                <small className="small mt-4 ">Consult a doctor</small>
              </NavLink>
            </div>
          </div>
          <div className="my-auto ">
            <button className="btn btn-outline-success text-dark respBtn">
              Login/Signup
            </button>
          </div>
        </div>
        <div class="mt-24 -mb-36 relative border-2 border-red-500 searchbox">
          <div class="bg-danger flex items-center  shadow-xl">
            <input
              class="border border-2 w-full  text-gray-900 focus:outline-none"
              id="search"
              type="text"
              placeholder="Search for your uqeries"
            />

            <div class="">
              <button class=" text-dark w-12  p-1 hover:bg-blue-400 focus:outline-none  flex items-center justify-center">
                <i class="fas fa-search-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar hidebar={hidebar} getbar={getbar} bar={bar} />
    </div>
  );
}

export default NavBar;
