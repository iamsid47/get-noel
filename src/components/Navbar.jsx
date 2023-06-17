import React from "react";

const Navbar = () => {
  return (
    <section className="">
      <nav className="bg-gray-900 px-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-normal whitespace-nowrap text-gray-50 mx-4">
              Noel
            </span>
          </a>
          <div className="flex md:order-2">
            <a href="/get-started" className="buttoncls">
              Get started
            </a>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <a
                  href="/action"
                  className="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-base hover:underline underline-offset-8 md:hover:bg-transparent md:hover:text-gray-400 md:p-0"
                  aria-current="page"
                >
                  In Action
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-base hover:underline underline-offset-8 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="mailto:sid@kulthe.com"
                  className="block py-2 pl-3 pr-4 text-white rounded font-light hover:bg-gray-100 text-base hover:underline underline-offset-8 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 "
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
