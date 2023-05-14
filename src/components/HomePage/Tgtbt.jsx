import React from "react";

const Tgtbt = () => {
  return (
    <section>
      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
          <a
            href="/action"
            class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full   hover:bg-gray-200 "
            role="alert"
          >
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              Check
            </span>{" "}
            <span class="text-sm font-medium">Noel In Action</span>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Sounds Too Good To Be True?
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
            Even though we're charging a fraction of the cost, we believe that
            Noel will never let you down. With an advanced neural network at
            it's heart, it has every chance that it will NOT screw up!
          </p>
          <div class="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/get-started"
              class="rounded-lg hover:bg-gray-800 px-3.5 py-1.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700 text-white transition duration-200 "
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tgtbt;
