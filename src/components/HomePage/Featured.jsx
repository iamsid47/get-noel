import React from "react";
import chatImg from "../assets/chat-noel.png";

const Featured = () => {
  return (
    <section>
      <div className="my-20 mx-6 lg:mx-16 px-12 md:flex justify-center space-x-5 items-center">
        <div className="">
          <div className="mb-4 inline-flex justify-start">
            <div className="md:-rotate-3 relative rounded-full px-3 py-1 shadow-lg text-sm leading-6 text-blue-500 ring-1 ring-blue-500 hover:ring-blue-800">
              Fact: Noel Never Sleeps &#128526;
            </div>
          </div>
          <div>
            <h1 className="max-w-3xl text-5xl lg:text-7xl font-bold tracking-tight">
              A support rep that your customers can rely on!
            </h1>
            <p className="py-2 mt-3 mb-6 max-w-xl">
              Customers need help with a lot of things right from product
              information, pricing to legal stuff, and return policies. Noel is
              here to provide them with accurate and up-to-date information
              about your offerings. No more scouring through pages of FAQs or
              waiting on hold for customer service reps – Noel is available 24/7
              to provide them with the answers they need.
            </p>
            <a href="/get-started" className="buttoncl">
              Get Started
            </a>
          </div>
        </div>
        <div className="my-12 md:my-0 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-3xl shadow-2xl">
          <img src={chatImg} alt="" className="max-w-base lg:max-w-xl p-4" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
