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
         <span className="header"> Ascend</span>  is a non-profit organization with a mission to digitalize Bangladesh by identifying and transforming the challenges faced by the country into opportunities. Through innovative software and technology solutions, Ascend strives to make a positive impact on the people of Bangladesh and contribute to the nation's growth and development. By taking a proactive approach to problem-solving, Ascend aims to create a better future for all by leveraging the power of technology to make a meaningful difference.
        </p>
        <p className="mt-7 text-justify leading-6 font-semibold max-sm:text-sm max-sm:text-left"> <span className="header"> Ascend</span>  is a dynamic non-profit organization that is dedicated to digitalizing Bangladesh. To achieve this goal, they actively participate in hackathons and contests to showcase the talent and potential of Bangladesh to the world. Moreover, they collaborate with other non-profit organizations to improve the IT sector and provide support in the form of skills development and software development. Additionally, Ascend is committed to empowering the youth of Bangladesh by offering online courses to help them learn new technologies. By providing these resources and opportunities, Ascend is dedicated to fostering the growth and development of the next generation and building a better future for all</p>
        <p className="mt-7 text-justify leading-6 font-semibold max-sm:text-sm max-sm:text-left">Ascend aims to bring happiness to Country, digitalize the country, and help people learn through innovative software solutions and community engagement</p>

        
        <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l font-light text-xl rounded-lg  px-5 py-2.5 text-center mb-2 mt-10 max-sm:block m-auto">__Ascend team</button>

      </div>
      <Image className="rounded-xl block m-auto mt-20 skew-y-3 max-sm:mt-10" src={Wwd} width="500" height="250" alt="we can"/>
    </div>
  );
}
