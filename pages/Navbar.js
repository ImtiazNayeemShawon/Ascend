import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-black px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0   ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase">
              Ascend
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 capitalize"
            >
              Join our team{" "}
              <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-slate-100 opacity-100"></span>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white cursor-pointer	uppercase"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="Our team"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                >
                  Our team
                </Link>
              </li>
              <li>
                <Link
                  href="projects"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="products"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="about us"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="Contact"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
