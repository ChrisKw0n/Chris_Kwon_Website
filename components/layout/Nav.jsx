"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "../transitions/TransitionLink";

const links = [
  {
    name: "Home",
    path: "/",
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
            className={`capitalize font-medium text-[25px] transition-all 
    ${
      link.path === pathname
        ? "text-[#ff6868] border-b-2 border-[#ff6868]"
        : "hover:text-[#ff6868]"
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
