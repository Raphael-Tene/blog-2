import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto spacey-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            {" "}
            Copyright © 2023, All Rights Reserved
          </div>
          <Image
            src="/images/logo-white.svg"
            width={200}
            height={30}
            alt="logo"
            className="h-8"
          />
          <div className="flex justify-center space-x-4">
            <Link href="/" className="h-8">
              <Image
                src="/images/icon-facebook.svg"
                width={30}
                height={30}
                alt="facabooklogo"
              />
            </Link>{" "}
            <Link href="/" className="h-8">
              <Image
                src="/images/icon-instagram.svg"
                width={30}
                height={30}
                alt="facabooklogo"
              />
            </Link>{" "}
            <Link href="/" className="h-8">
              <Image
                src="/images/icon-pinterest.svg"
                width={30}
                height={30}
                alt="facabooklogo"
              />
            </Link>{" "}
            <Link href="/" className="h-8">
              <Image
                src="/images/icon-twitter.svg"
                width={30}
                height={30}
                alt="facabooklogo"
              />
            </Link>{" "}
            <Link href="/" className="h-8">
              <Image
                src="/images/icon-youtube.svg"
                width={30}
                height={30}
                alt="facabooklogo"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="" className="hover:text-brightRed">
              Home
            </Link>
            <Link href="" className="hover:text-brightRed">
              Pricing
            </Link>
            <Link href="" className="hover:text-brightRed">
              Products
            </Link>
            <Link href="" className="hover:text-brightRed">
              About Us
            </Link>
          </div>{" "}
          <div className="flex flex-col space-y-3 text-white">
            <Link href="" className="hover:text-brightRed">
              Careers
            </Link>
            <Link href="" className="hover:text-brightRed">
              Community
            </Link>
            <Link href="" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Updates in your inbox"
                className="flex-1 px-4 rounded-full focus:outline-none"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                {" "}
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright © 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
