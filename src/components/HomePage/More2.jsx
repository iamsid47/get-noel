import React from "react";
import MoreImg from "../assets/More.png";

const More2 = () => {
  return (
    <section>
      <section class="bg-white">
        <div class="gap-8 items-center pt-4 my-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6 flex flex-col px-10 md:px-6">
          <div class="mt-4 md:mt-0">
            <div className="mb-5 flex justify-start">
              <div className="-rotate-3 relative rounded-full px-3 py-1 shadow-lg text-sm leading-6 text-blue-500 ring-1 ring-blue-500 hover:ring-blue-800">
                Fact: Noel Doesn't Swear 😊
              </div>
            </div>
            <div>
              <h2 class="mb-4 text-6xl tracking-tight font-bold text-gray-900 ">
                99.90% Uptime
              </h2>
              <p class="mb-8 lg:mb-6 font-light text-gray-500 md:text-lg ">
                We offer a 99.90% uptime guarantee, which means that you can be
                confident that Noel will be there when your customers need him!
                We have multiple systems in place to ensure that Noel is always
                available. If one system goes down, another system will take
                over. We are committed to providing your customers with the best
                possible support experience.
              </p>
              <a href="/get-started" class="buttoncl">
                Get Started
              </a>
            </div>
          </div>
          <img class="w-full" src={MoreImg} alt="more money" />
        </div>
      </section>
    </section>
  );
};

export default More2;
