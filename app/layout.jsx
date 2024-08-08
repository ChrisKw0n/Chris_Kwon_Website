"use client";

import { useEffect } from "react";
import { JetBrains_Mono } from "next/font/google";
import "./globals.scss";

// components
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import Interactive from "../components/Interactive";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export default function RootLayout({ children }) {
  // Circular cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById("circularcursor");
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <div id="circularcursor"></div>
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 18 -8
            "
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div class="gradients-container">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
            <Interactive />
          </div>
        </div>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
