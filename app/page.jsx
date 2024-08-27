"use client";

import React, { useEffect, useRef } from "react";

import TypeEffectText from "../components/home/typeEffectText";
import SocialLinks from "../components/home/socialLinks";
import SlideComponent from "../components/home/slideComponent/slideComponent";

const Home = () => {
  return (
    <main>
      <SocialLinks />
      <TypeEffectText />
      <SlideComponent />
    </main>
  );
};

export default Home;
