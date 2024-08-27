"use client";

import React from "react";
import Typed from "typed.js";
import Styles from "./home.module.scss";

function typeEffectText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Engineering student",
        "Web3 developer",
        "Music producer",
        "Blockchain enthusiast",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={Styles.typingEffect}>
      <h1>
        <span ref={el} />
      </h1>
    </div>
  );
}

export default typeEffectText;
