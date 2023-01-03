import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative container animate-pulse text-red-700  mx-auto p-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="pt-2">
          <Image src="images/logo.svg" width={150} height={100} alt="logo" />
        </Link>
        <div className="hidden md:flex space-x-6 ">
          <Link className=" hover:text-darkGrayishBlue" href="/">
            Pricing
          </Link>
          <Link className=" hover:text-darkGrayishBlue" href="/">
            Product
          </Link>
          <Link className=" hover:text-darkGrayishBlue" href="/">
            About Us
          </Link>
          <Link className=" hover:text-darkGrayishBlue" href="/">
            Careers
          </Link>
          <Link className=" hover:text-darkGrayishBlue" href="/">
            Community
          </Link>
        </div>
        <Link
          href="/"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
