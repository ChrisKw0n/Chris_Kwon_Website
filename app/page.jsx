"use client";

import React, { useEffect, useRef } from "react";
import "./globals.scss";

import TypeEffectText from "../components/home/typeEffectText";
import SocialLinks from "../components/home/socialLinks";
import SlideComponent from "../components/home/slideComponent/slideComponent";
import GlassComponent from "../components/home/glassComponent/glassComponent";

const Home = () => {
  return (
    <main>
      <TypeEffectText class="TypeEffectText" />
      <GlassComponent />
      <SocialLinks />
      <SlideComponent />
    </main>
  );
};

export default Home;
