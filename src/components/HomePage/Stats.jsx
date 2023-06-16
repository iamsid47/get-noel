import React from "react";

const Stats = () => {
  return (
    <section className="my-12">
      <div className="mx-16 my-8 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-2xl shadow-2xl text-white flex justify-around">
        <div className="mx-4 px-4 my-4 py-4">
          <h1 className="text-7xl tracking-normal max-w-lg capitalize">
            Numbers you'd love to know
          </h1>
        </div>
        <div className="flex items-center space-x-12 -mt-2">
          <div className="mx-2 my-6 flex flex-col items-center">
            <h1 className="text-7xl font-bold">95%</h1>
            <h2 className="text-sm uppercase text-gray-200">
              Accuracy During Chat
            </h2>
          </div>
          <div className="mx-2 my-6 flex flex-col items-center">
            <h1 className="text-7xl font-bold">7M+</h1>
            <h2 className="text-sm uppercase text-gray-200">Parameters</h2>
          </div>
          <div className="mx-2 my-6 flex flex-col items-center">
            <h1 className="text-7xl font-bold">1.2 sec</h1>
            <h2 className="text-sm uppercase text-gray-200">
              Average Response Time
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
