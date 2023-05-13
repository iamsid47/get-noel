import React from "react";

const More3 = () => {
  return (
    <section>
      <section class="bg-white">
        <div class="gap-8 items-center pt-4 my-24 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          <img
            class="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard"
          />
          <div class="mt-4 md:mt-0">
            <div className="mb-4 flex justify-end">
              <div className="rotate-3 relative rounded-full px-3 py-1 shadow-lg text-sm leading-6 text-blue-500 ring-1 ring-blue-500 hover:ring-blue-800">
                Fact: Noel Never Takes A Day Off ✨
              </div>
            </div>
            <h2 class="mb-4 text-6xl tracking-tighter font-bold text-gray-900 ">
              Perfect to it's core
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg ">
              Our AI chatbot is designed to understand your customers queries
              and provide personalized solutions to meet your needs. Whether
              they need help with product availability or want to know more
              about the customer care policies, Noel has got you covered.
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
