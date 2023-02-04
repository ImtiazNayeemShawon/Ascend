import React from "react";
import Image from "next/image";
import Web from "../public/coding.png";

export default function Services() {
  //const array = ["web develope", "app develope", "ui/ux", "graphic design"];

  return (
    <div>
      <div className="mb-96">
        <h1 className="text-center text-4xl header mt-40">Our services</h1>
        <div className="grid grid-cols-4 text-center place-items-center max-sm:grid-cols-1 mt-20">
          <div className="bg-black h-80 w-80 rounded-lg p-4  border-2  border-lime-200">
            <Image className="m-auto" src={Web} width={100} height={150} />
            <h1 className="header mt-12">Web developement</h1>
            <p className="text-center text-sm text-gray-400 mt-5">
              We make website for promote you buisness using modern technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
