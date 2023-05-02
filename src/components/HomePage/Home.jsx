import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Featured from "./Featured";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Featured />
    </section>
  );
};

export default HomePage;
