import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl front-semibold">
            Chris<span className="text-orange-400">.</span>
          </h1>
        </Link>
        {/* Navigation */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
