import React from "react";
import Image from "next/image";

const Heropage = () => {
  return (
    <div className="">
      <span className="flex justify-center text-2xl font-[Goga]">
        Manage your tasks
        {/* {"use different font  "} */}
      </span>
      <div className="flex justify-center p-6 px-25 font-[Goga]">
        <div className="flex flex-col items-center">
          <span className="text-7xl font-bold ">List It.</span>
          <span className="text-7xl font-bold ">Do It.</span>
        </div>
      </div>
      <span className="flex justify-center items-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
        iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in?
        lorem50
      </span>
      <div className="flex flex-col items-center">
        <span className=" outline-1 outline-black rounded-4xl px-5 py-1 uppercase flex items-center gap-2">
          try it
        </span>
      </div>
      <div className="flex justify-center mt-10">
        <Image src="/heroimage.png" alt="Hero Image" width={500} height={300} />
      </div>
    </div>
  );
};

export default Heropage;
