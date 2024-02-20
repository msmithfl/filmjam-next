import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="border-b">
      <div className="wrapper flex items-center justify-between">
        <div className="flex gap-8 items-baseline">
          <Link href="/" className="w-36">
            <h1 className="text-2xl font-bold">filmjam.io</h1>
          </Link>

          <nav className="md:flex-between hidden w-full max-w-xs">
            <Nav />
          </nav>
        </div>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <div className="flex items-center gap-4">
            <SignedOut>
              <Button asChild className="rounded-full md:px-7">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
