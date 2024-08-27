"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "../transitions/TransitionLink";

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
            className={`capitalize font-medium transition-all 
    ${
      link.path === pathname
        ? "text-[#F46C03] border-b-2 border-[#F46C03]"
        : "hover:text-[#F46C03]"
    }
  `}
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
