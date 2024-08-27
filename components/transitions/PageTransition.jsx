"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("page-transition-initial");

    // Fade-in effect
    setTimeout(() => {
      body?.classList.add("page-transition-complete");
    }, 800); // Delay to ensure content is fully loaded before fading in

    // Clean up classes
    return () => {
      body?.classList.remove(
        "page-transition-initial",
        "page-transition-complete"
      );
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="transition-container"
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
