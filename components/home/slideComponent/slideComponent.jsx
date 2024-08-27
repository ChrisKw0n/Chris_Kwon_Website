"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lenis from "lenis";

import Slide from "./slide";
import Picture1 from "../../images/github_logo.png";
import Picture2 from "../../images/github_logo.png";
import Picture3 from "../../images/github_logo.png";

const SlideComponent = () => {
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
    <div className="overflow-hidden">
      <div></div>
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
        left={"-35%"}
        progress={scrollYProgress}
      />
      <div className="h-[100vh]" />
    </div>
  );
};

export default SlideComponent;
