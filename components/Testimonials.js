import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Testimonials() {
  return (
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What's different about Manage?{" "}
      </h2>
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <Image
            className="w-16 -mt-14"
            src="/images/avatar-anisha.png"
            width={300}
            height={300}
            alt="Anisha"
          />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's wokflow. The ability to maintain
            visibility on larger milestone at all times keeps everyone
            motivated."
          </p>
        </div>
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
          <Image
            className="w-16 -mt-14"
            src="/images/avatar-ali.png"
            width={300}
            height={300}
            alt="Anisha"
          />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's wokflow. The ability to maintain
            visibility on larger milestone at all times keeps everyone
            motivated."
          </p>
        </div>
        <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
          <Image
            className="w-16 -mt-14"
            src="/images/avatar-richard.png"
            width={300}
            height={300}
            alt="Anisha"
          />
          <h5 className="text-lg font-bold">Richard Chairman</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's wokflow. The ability to maintain
            visibility on larger milestone at all times keeps everyone
            motivated."
          </p>
        </div>
        <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
          <Image
            className="w-16 -mt-14"
            src="/images/avatar-shanai.png"
            width={300}
            height={300}
            alt="Anisha"
          />
          <h5 className="text-lg font-bold">Shanai Wane</h5>
          <p className="text-sm text-darkGrayishBlue">
            "Manage has supercharged our team's wokflow. The ability to maintain
            visibility on larger milestone at all times keeps everyone
            motivated."
          </p>
        </div>
      </div>
      <div className="my-16">
        <Link
          href="/"
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
