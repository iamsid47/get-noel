import React from "react";
const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-sky-400 via-blue-700 to-blue-900 overflow-hidden ">
      <div className="px-6 lg:px-8 backdrop-blur-3xl">
        <div className="mx-auto max-w-7xl pt-24 pb-12">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <a href="/action">
              <span class="my-16 lg:my-12 announcecl font-light">
                Check Noel <strong>In Action </strong>
                <span class="text-[#39FF14]">&rarr;</span>
              </span>
            </a>
          </div>
          <div className="text-center flex flex-col items-center">
            <h1 className="md:text-9xl font-bold tracking-tight text-gray-50 text-6xl">
              Support, Automated.
            </h1>
            <p className="mt-6 md:text-lg text-md text-gray-50  leading-tight max-w-2xl">
              Noel is your AI-powered support rep that works 24/7!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/get-started" className="buttoncl">
                Get Started{" "}
                <span className="text-gray-400 mx-2 hidden md:inline-block">
                  - It's Free
                </span>
              </a>
              <a
                href="mailto:sid@kulthe.com"
                className="text-sm  leading-6 text-white hover:underline underline-offset-8"
              >
                Reach Out <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12 ">
        <div className="relative">
          <div className="absolute inset-0 h-2/3 "></div>
          <div className="relative mx-auto">
            <div className="lg:max-w-6xl lg:mx-auto">
              <img
                className="transform scale-110"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
