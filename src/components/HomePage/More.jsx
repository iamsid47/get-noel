import React from "react";

const More = () => {
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
            <h2 class="mb-4 text-6xl tracking-tighter font-bold text-gray-900 ">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg ">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="/"
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

export default More;
