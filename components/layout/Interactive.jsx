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

    function move() {
      curx += (tgX - curx) / 20;
      cury += (tgY - cury) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curx
      )}px, ${Math.round(cury)}px)`;
      requestAnimationFrame(move);
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return <div className="interactive"></div>;
};

export default Interactive;
