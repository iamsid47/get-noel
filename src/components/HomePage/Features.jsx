import React from "react";
import Astronaut from "../assets/astronaut.png";

const Features = () => {
  return (
    <section className="pb-12 mb-12">
      <h1 className="text-center mt-24 mb-12 text-6xl tracking-tighter">
        Features You'd Miss Elsewhere
      </h1>
      <div className="flex justify-center space-x-12 items-center">
        <div className="flex items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-200 p-12 max-w-2xl rounded-2xl shadow-xl">
          <div className="p-6 text-gray-800 max-w-xl">
            <h1 className="text-4xl font-bold">
              Say hello to this cool thing!
            </h1>
            <p className="my-4 ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div>
            <img src={Astronaut} alt="" />
          </div>
        </div>
        <div className="flex items-center bg-gradient-to-b from-sky-300 to-sky-100 p-12 max-w-2xl rounded-2xl shadow-xl">
          <div className="p-6 text-gray-800 max-w-xl">
            <h1 className="text-4xl font-bold">
              And something even more amazing
            </h1>
            <p className="my-4 ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
          <div>
            <img src={Astronaut} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
