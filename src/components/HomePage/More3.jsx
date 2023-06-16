import React from "react";
import Wireframe from "../assets/wireframe-bg.png";

const More3 = () => {
  return (
    <section>
      <section class="bg-white">
        <div class="gap-8 items-center pt-4 my-24 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          <img class="w-full" src={Wireframe} alt="dashboard" />
          <div class="mt-4 md:mt-0">
            <div className="mb-4 flex justify-end">
              <div className="rotate-3 relative rounded-full px-3 py-1 shadow-lg text-sm leading-6 text-blue-500 ring-1 ring-blue-500 hover:ring-blue-800">
                Fact: Noel Improves Itself ⚡
              </div>
            </div>
            <h2 class="mb-4 text-6xl tracking-tight font-bold text-gray-900 ">
              Track Customer Engagement
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg ">
              Noel provides you with all of the chat logs so that you can
              understand how he performed while talking to customers. This is a
              valuable tool for tracking customer engagement, as it allows you
              to see how Noel interacts with customers, what questions they ask,
              and how he answers them.
            </p>
            <a
              href="/get-started"
              class="rounded-lg hover:bg-gray-800 px-3.5 py-2.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700 text-white transition duration-200 "
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default More3;
