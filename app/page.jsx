import React from "react";
import Image from "next/image";
import Link from "next/link";

// Image imports
import instagramLogo from "./images/instagram_logo.png";
import githubLogo from "./images/github_logo.png";
import linkinLogo from "./images/linkedin_logo.png";

const Home = () => {
  return (
    <div>
      <div className="welcome-text">
        <h1>Not much to see here yet,</h1>
        <h2>for now enjoy the interactive bubbles!</h2>
        <h1 style={{ paddingTop: "80px" }}>Content coming soon</h1>
      </div>

      <div className="social-link-container container">
        <div>
          <Link
            href="https://www.instagram.com/chris.hkj/?hl=en"
            target="_blank"
          >
            <Image
              class="social-logo"
              src={instagramLogo}
              alt="Instagram Link"
              width={50}
              height={50}
              placeholder="blur"
            />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/hyukjun3" target="_blank">
            <Image
              class="social-logo"
              src={githubLogo}
              alt="Github Link"
              width={50}
              height={50}
              placeholder="blur"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/chris-kwon-16aa19172/"
            target="_blank"
          >
            <Image
              class="social-logo"
              src={linkinLogo}
              alt="LinkedIn Link"
              width={50}
              height={50}
              placeholder="blur"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
