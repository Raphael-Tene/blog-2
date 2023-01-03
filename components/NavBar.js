import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [selected, setSelected] = useState(false);

  function hamburgerOpenHandler() {
    setSelected(!selected);
  }
  return (
    <nav className="relative container text-red-700  mx-auto p-6">
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
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get started
        </Link>
        <button
          className={`block hamburger md:hidden focus:outline-none ${
            selected && "open"
          }`}
          onClick={hamburgerOpenHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          className={`absolute flex-col flex  ${
            !selected && "hidden"
          } items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="/">Pricing</a>
          <a href="/">Product</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
        </div>
      </div>
    </nav>
  );
}
