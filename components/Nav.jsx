"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Portfolio",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/projects",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center">
      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={link.path}
            className={`${
              link.path === pathname &&
              "text-orange-400 border-b-2 border-orange-400"
            } capitalize font-medium hover:text-orange-400 transition-all`}
          >
            {link.name}
          </Link>
          {index < links.length - 1 && (
            <span className="mx-2 text-gray-400">//</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
