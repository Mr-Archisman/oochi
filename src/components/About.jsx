import React from "react";

function About() {
  return (
    <div  className=" w-full h-screen py-16 px-7 bg-[#CDEA68] rounded-t-xl">
      <h1 className='font-["Nueue_Montreal"] text-zinc-800 text-[40px] font-semibold tracking-tight leading-none'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full border-t-[1px]   border-[#8fab2a] mt-6 text-zinc-800 flex  gap-10 px-14 ">
        <div className="w-1/2">
          <h1 className='text-3xl font-semibold tracking-tight font-["Nueue_Montreal"]'>
            Our approach:
          </h1>
          <button className='bg-zinc-900 font-["Nueue_Montreal"] text-sm px-3 py-2 rounded-3xl tracking-tighter text-white mt-5 flex items-center '>
            {" "}
            READ MORE
            <div className="h-3 w-3 ml-7 rounded-full bg-white "></div>
          </button>
        </div>

        <div className=" h-[50vh] bg-[#8fab2a]  mt-5 rounded-2xl w-[50vw]"></div>
      </div>
    </div>
  );
}

export default About;
