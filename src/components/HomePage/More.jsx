import React from "react";
import Working from "../assets/Customer's Queries.png";

const More = () => {
  return (
    <section>
      <section class="bg-white">
        <div class="gap-8 items-center pt-4 mt-24 mb-8 px-10 md:px-6 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6 flex flex-col-reverse ">
          <img class="w-full" src={Working} alt="working" />
          <div class="mt-4 md:mt-0">
            <div className="mb-4 flex justify-end">
              <div className="rotate-3 relative rounded-full px-3 py-1 shadow-lg text-sm leading-6 text-blue-500 ring-1 ring-blue-500 hover:ring-blue-800">
                Fact: Noel Never Takes A Day Off ✨
              </div>
            </div>
            <div>
              <h2 class="mb-4 text-5xl tracking-tight font-bold text-gray-900 ">
                Perfect to it's core
              </h2>
              <p class="mb-8 lg:mb-6 font-light text-gray-500 md:text-lg ">
                Our AI chatbot is designed to understand your customers queries
                and provide personalized solutions to meet your needs. Whether
                they need help with product availability or want to know more
                about the customer care policies, Noel has got you covered.
              </p>
              <a href="/get-started" class="buttoncl">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default More;
