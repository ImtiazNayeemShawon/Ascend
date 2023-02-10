import React from "react";
import Image from "next/image";
import Join from "./partnership.png";

export default function PersonalInfo() {
  return (
    <div className="mt-10 bg-slate-900 p-10 rounded-md ">
      <div className="flex justify-between	max-sm:block m-auto">
        <div className="">
          <input
            type="text"
            className="p-2 rounded outline-0 text-gray-900 max-sm:block max-sm:m-auto"
            placeholder="Your full name"
          />
          <br />
          <input
            type="email"
            className="p-2 rounded outline-0 text-gray-900 max-sm:block max-sm:m-auto mt-3"
            placeholder="Enter your email"
          />
          <br />
          <input
            type="text"
            className="p-2 rounded outline-0 text-gray-900   mt-3 max-sm:block max-sm:m-auto"
            placeholder="Institute name"
          />{" "}
          <br />
          <input
            type="text"
            className="p-2 rounded outline-0 text-gray-900  mt-3 max-sm:block max-sm:m-auto"
            placeholder="your Adress"
          />
          <br />
          <input
            type="text"
            className="p-2 rounded outline-0 text-gray-900  mt-3 max-sm:block max-sm:m-auto"
            placeholder="Your skill or interest"
          />
        </div>
        <div>
          <Image
            src={Join}
            width="300"
            alt="join our team"
            className="rotate-45 max-sm:m-auto max-sm:block"
          />
        </div>
        <div>
          <button
            type="file"
            className="text-center rounded-lg bg-gray-800 w-44 h-44 font-extrabold text-4xl max-sm:m-auto max-sm:block max-sm:mt-5"
          >
            +
          </button>
          <p className="text-center text-sm capitalize text-gray-400">
            Upload your picture{" "}
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold p-3  rounded mt-10 m-auto  hover:bg-white duration-200 hover:text-gray-900 block"
      >
        Submit your information
      </button>
    </div>
  );
}
