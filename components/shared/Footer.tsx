import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper justify-between items-center flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h1 className="text-2xl font-bold">filmjam.io</h1>
        </Link>
        <p>2024 filmjam.io. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
