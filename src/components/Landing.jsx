import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full h-screen bg-zinc-900 pt-32 ">
      <div className="textstructure px-20 mt-10 ">
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker  ">
              <div className="w-[100vh]  flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "11vh" }}
                    transition={{ ease: [0.65, 0, 0.35, 1] }}
                    className="w-[9vh] h-[9vh] bg-red-200  relative top-[0.9vh] rounded-md  "
                  ></motion.div>
                )}
                <h1 className="uppercase text-8xl leading-[11vh] tracking-tight font-[600]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-5 py-3">
        {[
          ,
          "For Public and Private Companies",
          "From The First Pitch To IPO",
        ].map((item, index) => (
          <p className='text-md  tracking-tight leading-none font-["Neue Montreal" ] '>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-1 w-fit border-[2px] border-zinc-500  rounded-2xl">
            Start The Project
          </div>
          <div className="w-fit h-fit p-2 border-[2px] border-zinc-500 rounded-full rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
