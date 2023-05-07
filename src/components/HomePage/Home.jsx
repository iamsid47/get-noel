import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import Stats from "./Stats";
import Features from "./Features";
import Footer from "../Footer";
import More from "./More";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Stats />
      <Featured />
      <Features />
      <More />

      <Footer />
    </section>
  );
};

export default HomePage;
