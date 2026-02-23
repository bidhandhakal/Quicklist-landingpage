import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="font-[Goga]">
      <nav className="flex items-center justify-between p-4 px-25 fixed w-full bg-white/30 backdrop-blur-md bg-blend-darken">
        <span className="text-xl font-bold ml-2">Quicklist</span>

        <div className="space-x-4 ">
          <a href="/home" className="">
            Home
          </a>
          <a href="/features" className="">
            Features
          </a>
          <a href="/request" className="">
            Request
          </a>
        </div>
        <span className=" outline-1 outline-black rounded-4xl px-5 py-1 uppercase flex items-center gap-2">
          try it
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
