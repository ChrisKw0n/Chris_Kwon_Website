import Link from "next/link";
import { Button } from "../ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-5xl front-semibold">
            Chris<span style={{ color: "#FFC785" }}>.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="xl:flex items-center gap-8">
          <Nav />
          <Link href="">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
