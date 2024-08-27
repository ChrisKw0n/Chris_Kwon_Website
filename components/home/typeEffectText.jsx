"use client";

import React from "react";
import Typed from "typed.js";

function typeEffectText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      typeSpeed: 50,
      loop: true,
      backSpeed: 25,
      backDelay: 2000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default typeEffectText;
