import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-b flex border-b-[#3a3940] px-4 md:px-8 py-4 md:py-8  grid-cols-1 md:grid-cols-2 gap-4 justify-between w-full mx-auto">
      <button class="flex items-center justify-center relative box-border bg-transparent outline-none cursor-pointer select-none align-middle appearance-none no-underline font-poppins font-sans leading-7 min-w-16 transition-all duration-250 ease-in bg-none w-36 h-12 px-0 rounded-full border border-gray-400 text-sm font-normal capitalize text-white">
        Back
      </button>

      <button class="flex items-center justify-center relative box-border bg-transparent outline-none cursor-pointer select-none align-middle appearance-none no-underline font-poppins font-sans leading-7 min-w-16 transition-all duration-250 ease-in bg-none w-36 h-12 px-0 rounded-full border border-gray-400 text-sm font-normal capitalize text-white">
        Next
      </button>
     
    </footer>
  );
};

export default Footer;
