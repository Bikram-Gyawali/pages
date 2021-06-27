import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div style={{ zIndex: "6" }}>
      <div class="wrapper m-b-3">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon">
            <i class="fas fa-bars"></i>
          </label>
          <div class="content">
            <div class="logo">
              <a href="/">Logo</a>
            </div>
            <ul class="links">
              <li>
                <a href="/consult">Consult</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#" class="desktop-link">
                  Bookings
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Features</label>
                <ul>
                  <li>
                    <a href="#">Drop Menu 1</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">
                  Services
                </a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">Services</label>
                <ul>
                  <li>
                    <a href="#">Drop Menu 1</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Menu 3</a>
                  </li>
                  <li>
                    <a href="#" class="desktop-link">
                      More Items
                    </a>
                    <input type="checkbox" id="show-items" />
                    <label for="show-items">More Items</label>
                    <ul>
                      <li>
                        <a href="#">Sub Menu 1</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu 2</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#1" className="text-xs">
                  <small>Login/Signup</small>
                </a>
              </li>
            </ul>
          </div>
          <label for="show-search" class="search-icon">
            <i class="fas fa-search"></i>
          </label>
          <form action="#" class="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              required
            />
            <button type="submit" class="go-icon">
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
