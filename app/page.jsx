import React from "react";
import "./globals.scss";

// components

import Header from "../components/Header";
import Interactive from "../components/Interactive";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <div className="gradient-bg">
      <div class="g1"></div>
      {/* <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div> */}
      <Header />
      <Interactive />
      <PageTransition />
    </div>
  );
};

export default Home;
