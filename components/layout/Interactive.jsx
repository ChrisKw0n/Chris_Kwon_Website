"use client";

import React, { useEffect } from "react";
import "../../app/globals.scss";

const Interactive = () => {
  useEffect(() => {
    let curx = 0;
    let cury = 0;
    let tgX = 0;
    let tgY = 0;

    const interBubble = document.querySelector(".interactive");

    if (!interBubble) {
      console.error("Interactive element not found");
      return;
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX + window.scrollX; // Adjust for scroll position
      tgY = event.clientY + window.scrollY; // Adjust for scroll position
    };

    function move() {
      curx += (tgX - curx) / 20;
      cury += (tgY - cury) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curx
      )}px, ${Math.round(cury)}px)`;
      requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", handleMouseMove);

    move();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="interactive"></div>;
};

export default Interactive;
