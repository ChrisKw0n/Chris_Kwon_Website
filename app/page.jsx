"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lenis from "lenis";

import TypeEffectText from "../components/home/typeEffectText";
import SocialLinks from "../components/home/socialLinks";
import Slide from "../components/home/slide";
import Picture1 from "../components/images/github_logo.png";
import Picture2 from "../components/images/github_logo.png";
import Picture3 from "../components/images/github_logo.png";

const Home = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div>
        <SocialLinks />
        <TypeEffectText />
      </div>
      <div className="h-[100vh]" />
      <Slide
        src={Picture1}
        direction={"left"}
        left={"-40%"}
        progress={scrollYProgress}
      />
      <Slide
        src={Picture2}
        direction={"right"}
        left={"-25%"}
        progress={scrollYProgress}
      />
      <Slide
        src={Picture3}
        direction={"left"}
        left={"-75%"}
        progress={scrollYProgress}
      />
      <div className="h-[100vh]" />
    </main>
  );
};

export default Home;
