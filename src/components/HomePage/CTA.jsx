import React from "react";

const CTA = () => {
  return (
    <section>
      <section class="bg-white ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="mx-auto text-center">
            <h2 class="mb-4 text-6xl tracking-tight font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
              Why wait when it's here for you!
            </h2>
            <p class="mb-6 font-light text-gray-500  md:text-lg">
              Try Noel free for 30 days. No credit card required.
            </p>
            <a
              href="/get-started"
              class="rounded-lg hover:bg-gray-800 px-3.5 py-2.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700 text-white transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CTA;
