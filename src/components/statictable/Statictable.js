import React from "react";
import "./statictable.css";
function Statictable() {
  return (
    <div>
      <section class="text-white text-2xl body-font bg-primary">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4 text-center resRat">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p class="leading-relaxed">Happy Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                950+
              </h2>
              <p class="leading-relaxed">Verified Doctors</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                100+
              </h2>
              <p class="leading-relaxed">Specialities</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 ">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 ">
                <i class="fas fa-star text-yellow-500"></i> 4.5/5
              </h2>
              <p class="leading-relaxed ">Ratings</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statictable;
