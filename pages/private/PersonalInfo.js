import React from "react";

export default function PersonalInfo() {
  return (
    <div className="mt-10 bg-slate-900 p-10 rounded-md ">
      <div className="flex ">
        <div className="">
          <input
            type="text"
            className="p-2 rounded outline-0 text-white"
            placeholder="Your full name"
          />
          <br />
          <input
            type="email"
            className="p-2 rounded outline-0 text-white  mt-3"
            placeholder="Enter your email"
          />
          <br />
          <input
            type="text"
            className="p-2 rounded outline-0 text-white  mt-3"
            placeholder="Institute name"
          />
          
        </div>
        <div className="bg-gray-800 w-56 rounded">
            <input type="file"/>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
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
