import React from "react";
import logo from "../dictionaries all at once logo ori.png";
const Header = () => {

  return (
    <div>
      <div className="header" class="bg-cyan-900 grid grid-cols-2 shadow-lg">
        <img src={logo} alt="picture" />
        <nav class="
            bg-cyan-900
             relative
             flex
             flex-row-reverse
             py-2
             text-gray-100
             hover:text-gray-700
             focus:text-gray-700
             shadow-lg
             navbar navbar-expand-lg 
            ">
          <div class="flex
             flex-row-reverse 
             container-fluid 
             w-full 
             flex 
             flex-wrap 
             justify-between 
             px-6">
            <button class="
                bg-cyan-900
                navbar-toggler
                text-gray-500
                border-0
                hover:shadow-none hover:no-underline
                py-2
                px-2.5
                bg-transparent
                focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
              " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
              </svg>
            </button>
            <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">

              <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                <li class="nav-item px-2">
                  <a class="nav-link active" aria-current="page" href="#"></a>
                </li>
                <li class="nav-item pr-2">
                  <a class="nav-link text-gray-300 p-0" href="#">Spanish</a>
                </li>
                <li class="nav-item pr-2">
                  <a class="nav-link text-gray-300 p-0" href="#">French &#x1f1eb;</a>
                </li>
                <li class="nav-item pr-2">
                  <a class="nav-link disabled text-gray-300 p-0"
                  >Disabled</a
                  >
                </li>
              </ul>

            </div>

          </div>
        </nav>
      </div>
    </div>
  );



}

export default Header;