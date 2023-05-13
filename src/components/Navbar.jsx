import React from "react";

const Navbar = () => {
  return (
    <section>
      <nav class="bg-gray-800">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
          <a href="/" class="flex items-center">
            <span class="self-center text-xl font-light whitespace-nowrap text-gray-50 mx-4">
              Noel
            </span>
          </a>
          <div class="flex md:order-2">
            <a
              href="/get-started"
              class="inline-flex items-center justify-center px-3 text-sm py-1 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Get started
            </a>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/action"
                  class="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-sm md:hover:bg-transparent md:hover:text-gray-400 md:p-0"
                  aria-current="page"
                >
                  In Action
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  class="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-sm md:hover:bg-transparent md:hover:text-gray-400 md:p-0 "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="mailto:sid@kulthe.com"
                  class="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-sm md:hover:bg-transparent md:hover:text-gray-400 md:p-0 "
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
