import Link from "next/link";
import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-brightRed" id="cta">
      <div className="container flex flex-col items-center justify-between px-6 py-20 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          {" "}
          Simplify how your team works today.
        </h2>
        <div>
          <Link
            href="/"
            className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-400 shadow-2xl"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
