import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <h1 className="text-2xl font-bold">filmjam.io</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
