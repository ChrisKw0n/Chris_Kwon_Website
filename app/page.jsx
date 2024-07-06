import React from "react";
import Image from "next/image";

// Image imports
import instagramLogo from "./images/instagram_logo.png";

const Home = () => {
  return (
    <div>
      <div class="social-link-container">
        <div>
          <Image
            class="instagram-link"
            src={instagramLogo}
            alt="Instagram Link"
            width={250}
            placeholder="blur"
          />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Home;

<a href="https://www.vecteezy.com/free-png/instagram">
  Instagram PNGs by Vecteezy
</a>;
