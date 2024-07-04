import React from "react";
import "../globals.scss";

// components
import Header from "../../components/Header";
import PageTransition from "../../components/PageTransition";

const Resume = () => {
  return (
    <div className="gradient-bg">
      <Header />
      <PageTransition />
    </div>
  );
};

export default Resume;
