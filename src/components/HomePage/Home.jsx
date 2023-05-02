import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import Stats from "./Stats";
import Features from "./Features";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Featured />
      <Stats />
      <Features />
    </section>
  );
};

export default HomePage;
