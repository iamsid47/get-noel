import React from "react";
import chatImg from "../assets/chat-noel.png";

const Featured = () => {
  return (
    <section>
      <div className="my-20 mx-16 px-12 md:flex justify-center space-x-5 items-center">
        <div className="">
          <div className="mb-4 flex justify-start">
            <div className="relative rounded-full px-3 py-1 shadow-sm text-sm leading-6 text-blue-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Something different here.
            </div>
          </div>
          <div>
            <h1 className="max-w-3xl text-7xl font-bold tracking-tighter">
              An overview of the entire company
            </h1>
            <p className="py-2 mt-3 mb-6 max-w-2xl">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <a
              href="/"
              className="rounded-md hover:bg-gray-800 px-3.5 py-2.5 text-sm  hover:text-white shadow-sm hover:shadow-xl bg-blue-700 text-white transition duration-200 "
            >
              Get started
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-300 to-purple-400 rounded-3xl shadow-2xl">
          <img src={chatImg} alt="" className="max-w-xl p-4" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
