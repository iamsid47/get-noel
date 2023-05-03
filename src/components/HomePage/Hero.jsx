import React from "react";
import downSVG from "../assets/down.svg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-rose-100 via-fuchsia-100 to-indigo-200 overflow-hidden ">
      <div className="px-6 lg:px-8 backdrop-blur-3xl">
        <div className="mx-auto max-w-7xl py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              We're using Machine Learning to solve Customer Relation Problems.{" "}
              <a href="/" className=" text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col items-center">
            <h1 className="md:text-9xl font-bold tracking-tight text-gray-900 text-5xl">
              Support, Automated.
            </h1>
            <p className="mt-6 text-lg text-gray-600 tracking-tight leading-tight max-w-2xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md hover:bg-gray-800 px-3.5 py-2.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700 text-white transition duration-200"
              >
                Get started
              </a>
              <a
                href="/"
                className="text-sm  leading-6 text-gray-900 hover:underline underline-offset-8"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <img src={downSVG} alt="" className="w-5" />
      </div>
    </section>
  );
};

export default Hero;
