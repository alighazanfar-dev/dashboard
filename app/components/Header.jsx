import Image from "next/image";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-black border-b flex border-b-[#3a3940] px-4 md:px-8 py-4 md:py-8  grid-cols-1 md:grid-cols-2 gap-4 justify-between w-full mx-auto">
      <div className="flex items-center">
        <div className="bg-gray-900 p-2 md:p-3 mr-2 rounded-md">
          <FaArrowLeft size={15} className="text-white" />
        </div>
        <div>
          <h6 className="text-white flex font-semibold  place-items-center">
            Media management <BiEditAlt className="ml-1" />
          </h6>
          <p className="text-slate-400 text-sm md:text-md">Draft campaign</p>
        </div>
      </div>
      <div className="flex items-center md:justify-end">
        <div className="mr-2 hidden sm:block">
          <h2 className="text-white  font-semibold">Jane Cooper</h2>
          <p className="text-[#FF7DFF] cursor-pointer underline text-sm md:text-md font-semibold">
            Change profile
          </p>
        </div>
        <div>
          <Image
            src="/IU.png"
            alt="profile"
            width={100}
            height={100}
            className="size-10 rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
