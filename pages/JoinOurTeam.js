import React from "react";
import Trophy from "../public/achive.png";
import Image from "next/image";
import ResumeUploder from "./private/ResumeUploder";
import { useState } from "react";
import PersonalInfo from "./private/PersonalInfo";

export default function JoinOurTeam(props) {
  const [showPersonalInfo, setPersonalinfo] = useState(false);
  const [reviewlInfo, setReviewinfo] = useState(false);

  const handlePersonalInfo = () => {
    setPersonalinfo(true);
  };
  const handleReviewInfo = () => {
    setReviewinfo(true);
  };

  return (
    <body className="bg-gray-900">
      <div className="mt-44 m-20 max-sm:m-3">
        <div className=" mt-20 m-5">
          <h1 className="text-center capitalize text-4xl tracking-normal font-bold text-yellow-300">
            Join our team and win many opporutnities
          </h1>
          <Image
            className="rounded-xl block m-auto h-44 mt-20"
            src={Trophy}
            width="200"
            height="200"
            alt="ascend trophy"
          />
        </div>
        <div className="">
          {/* first row */}

          <ol className="items-center sm:flex mt-8  bg-slate-600 rounded p-10 text-white grid grid-cols-3 max-sm:grid-cols-1 ">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Participate in olympiad
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  Chance to participate in many olympiads as a team, such as
                  BDMO, BPHO, BIO, and Robotics Olympiad.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Participate in Hackathon
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  Chance to participate in hackathons as a team to solve
                  problems in our country.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Work with live project
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  Chance to work on our own startup to tackle problems in our
                  country
                </p>
              </div>
            </li>
          </ol>
          {/* second row */}

          <ol className="items-center sm:flex mt-8 max-sm:mt-3 bg-slate-600 rounded p-10 text-white grid grid-cols-3 max-sm:grid-cols-1 ">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300">
                  Work with bangladesh top org
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  Opportunity to work with top organizations different catagory
                  in Bangladesh.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300 dark:text-white">
                  Learn new things
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  Opportunity to Learn skills and get internship or permanent
                  job in Ascend.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0  dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 bg-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" sm:flex w-full bg-gray-100 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-yellow-300 dark:text-white">
                  Make a identity
                </h3>

                <p className="text-base font-normal text-gray-100 dark:text-gray-400">
                  You can make your own identity by working with ascend team
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="mt-40">
          <div>
            <div className=" ">
              <h1 className="text-center text-xl uppercase font-bold p-4 bg-slate-600 rounded">
                join our team by complete 3 step{" "}
                <span className="text-4xl text-yellow-300">!</span>
              </h1>
              <div>
                <ol className=" max-sm:block flex mt-10 items-center w-full p-3 space-x-2 text-sm font-medium text-center  text-gray-500 bg-gray-800 border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                  <li className="flex items-center text-blue-100 dark:text-blue-100">
                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                      1
                    </span>
                    Upload your Resume
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center max-sm:mt-10">
                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                      2
                    </span>
                    Personal{" "}
                    <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 sm:ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center max-sm:mt-10">
                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                      3
                    </span>
                    Review and submit
                  </li>
                </ol>
                {showPersonalInfo ? <PersonalInfo /> : <ResumeUploder />}

                <button
                  onClick={handlePersonalInfo}
                  className="bg-gray-900 text-white font-bold p-3 w-44 rounded mt-10 m-auto  hover:bg-white duration-200 hover:text-gray-900 block"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
