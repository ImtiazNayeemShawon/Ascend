import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-black px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0   ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white uppercase">
              Ascend
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 capitalize"
            >
              Collaborate with us{" "}
              <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-slate-100 opacity-100"></span>
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
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
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="services"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="projects"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                  aria-current="page"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="about us"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                  aria-current="page"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="Contact"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 font-bold hover:text-blue-600 delay-200	cursor-pointer	uppercase"
                  aria-current="page"
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
