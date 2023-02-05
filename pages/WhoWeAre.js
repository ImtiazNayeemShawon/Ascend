import React from "react";
import Image from "next/image";
import Wwd from "../public/wwd.jpg";


export default function WhoWeAre() {
  return (
    <div  className="grid grid-cols-2 max-sm:grid-cols-1 ">
      <div className="ml-20 max-sm:m-6 ">
        <h1 className="text-left text-4xl header font-extrabold capitalize max-sm:text-center max-sm:text-3xl">
          Who we are?
        </h1>
        <p className="mt-7 text-justify leading-6 font-semibold max-sm:text-sm max-sm:text-left">
         <span className="header"> Ascend</span>  is a software company dedicated to empowering its customers to achieve new levels of performance and success. With a focus on software solutions, Ascend offers a range of products and services designed to help its clients reach their full potential
        </p>
        <p className="mt-7 text-justify leading-6 font-semibold max-sm:text-sm max-sm:text-left"> <span className="header"> Ascend</span> is not only focused on improving its customers' performance, but also on playing a significant role in the digital transformation of Bangladesh. The company recognizes the challenges that the country faces and is committed to finding innovative software solutions to address these problems. In addition, Ascend supports non-profit organizations that work to improve the lives of people in need and contribute to the development of the next generation. As part of this effort, the company has launched skill-based courses to help people develop the skills they need to succeed in the digital age. By combining its expertise in software with a dedication to serving the community, Ascend is helping to shape the future of Bangladesh and bring about positive change for all its citizens</p>
        <p className="mt-7 text-justify leading-6 font-semibold max-sm:text-sm max-sm:text-left">Ascend aims to bring happiness to clients, digitalize the country, and help people learn through innovative software solutions and community engagement</p>

        
        <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l font-light text-xl rounded-lg  px-5 py-2.5 text-center mb-2 mt-10 max-sm:block m-auto">__Ascend team</button>

      </div>
      <Image className="rounded-xl block m-auto mt-20 skew-y-3 max-sm:mt-10" src={Wwd} width="500" height="250"/>
    </div>
  );
}
