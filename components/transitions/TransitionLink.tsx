"use client";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  href,
  children,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500); // Adjust the delay as needed

    router.push(href);

    // Optional: Delay removing the class until the new page is fully loaded
    setTimeout(() => {
      body?.classList.remove("page-transition");
    }, 500); // Should match the duration of the fade-in in PageTransition
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};
