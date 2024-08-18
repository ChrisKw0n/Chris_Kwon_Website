"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "./utils/TransitionLink";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Demo",
    path: "/demo",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center">
      {links.map((link, index) => (
        <div key={index} className="flex items-center">
          <TransitionLink
            href={link.path}
            className={`${
              link.path === pathname &&
              "text-orange-400 border-b-2 border-orange-400"
            } capitalize font-medium hover:text-orange-400 transition-all`}
          >
            {link.name}
          </TransitionLink>
          {index < links.length - 1 && <span className="mx-5">{"//"}</span>}
        </div>
      ))}
    </nav>
  );
};

export default Nav;
