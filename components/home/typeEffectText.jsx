"use client";

import React from "react";
import Typed from "typed.js";
import Styles from "./home.module.scss";

function TypeEffectText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hey there! I'm Chris",
        "when solving problems",
        "sometimes all you need<br>is a little...",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      escapeHTML: false, // Allow HTML tags in strings
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

export default TypeEffectText;
