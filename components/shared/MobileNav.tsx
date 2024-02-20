"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { headerLinks, headerLinksSignedOut } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <h1 className="text-2xl font-bold">filmjam.io</h1>
          <Separator className="border border-gray-50" />
          <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
            <SignedIn>
              {headerLinks.map((link) => {
                const isActive = pathname === link.route;

                return (
                  <li
                    key={link.route}
                    className={`${
                      isActive && "text-blue-600"
                    } flex-center p-medium-16 whitespace-nowrap`}
                  >
                    <SheetClose asChild>
                      <Link href={link.route}>{link.label}</Link>
                    </SheetClose>
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
                    } flex-center p-medium-16 whitespace-nowrap`}
                  >
                    <SheetClose asChild>
                      <Link href={link.route}>{link.label}</Link>
                    </SheetClose>
                  </li>
                );
              })}
            </SignedOut>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
