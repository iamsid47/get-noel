import React from "react";

const CTA = () => {
  return (
    <section>
      <section className="bg-white ">
        <div className="pt-8 pb-16 px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="mx-auto text-center">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
              So, why wait when it's here for you!
            </h2>
            <p className="mb-8 lg:mb-6 text-gray-600  md:text-lg">
              Try Noel free for 30 days. No credit card required.
            </p>
            <a href="/get-started" className="buttoncl">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CTA;
