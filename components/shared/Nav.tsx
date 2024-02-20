"use client";

import { headerLinks, headerLinksSignedOut } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      <SignedIn>
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-blue-600"
              } flex-center text-[16px] font-medium leading-[24px] whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </SignedIn>
      <SignedOut>
        {headerLinksSignedOut.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.route}
              className={`${
                isActive && "text-blue-600"
              } flex-center text-[16px] font-medium leading-[24px] whitespace-nowrap`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </SignedOut>
    </ul>
  );
};

export default Nav;
