import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Featured from "./Featured";
import Stats from "./Stats";
import Features from "./Features";
import Footer from "../Footer";
import More from "./More";
import Benefits from "./Benefits";
import More2 from "./More2";
import CTA from "./CTA";
import Tgtbt from "./Tgtbt";
import More3 from "./More3";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Stats />
      <Featured />
      <Features />
      <Tgtbt />
      <More />
      <More2 />
      <More3 />
      <Benefits />
      <CTA />
      <Footer />
    </section>
  );
};

export default HomePage;
