import Image from "next/image";
import Link from "next/link";
import Styles from "./home.module.scss";

// Image imports
import instagramLogo from "../images/instagram_logo.png";
import githubLogo from "../images/github_logo.png";
import linkedinLogo from "../images/linkedin_logo.png";
import MagneticLink from "./magneticLink";

function SocialLinks() {
  return (
    <div className={Styles.socialLinkContainer}>
      <MagneticLink>
        <Link href="https://www.instagram.com/chris.hkj/?hl=en" target="_blank">
          <Image
            className={Styles.socialLogo}
            src={instagramLogo}
            alt="Instagram Link"
            width={50}
            height={50}
            placeholder="blur"
          />
        </Link>
      </MagneticLink>
      <MagneticLink>
        <Link href="https://github.com/hyukjun3" target="_blank">
          <Image
            className={Styles.socialLogo}
            src={githubLogo}
            alt="Github Link"
            width={50}
            height={50}
            placeholder="blur"
          />
        </Link>
      </MagneticLink>
      <MagneticLink>
        <Link
          href="https://www.linkedin.com/in/chris-kwon-16aa19172/"
          target="_blank"
        >
          <Image
            className={Styles.socialLogo}
            src={linkedinLogo}
            alt="LinkedIn Link"
            width={50}
            height={50}
            placeholder="blur"
          />
        </Link>
      </MagneticLink>
    </div>
  );
}

export default SocialLinks;
