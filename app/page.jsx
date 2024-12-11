"use client";

import React, { useEffect, useRef } from "react";

import TypeEffectText from "../components/home/typeEffectText";
import SocialLinks from "../components/home/socialLinks";
import SlideComponent from "../components/home/slideComponent/slideComponent";
import GlassComponent from "../components/home/glassComponent/glassComponent";

const Home = () => {
  return (
    <main>
      <TypeEffectText />
      <SocialLinks />
      <GlassComponent />
      <SlideComponent />
    </main>
  );
};

export default Home;
