import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Featured />
      <Stats />
    </section>
  );
};

export default HomePage;
