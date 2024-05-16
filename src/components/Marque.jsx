import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full h-[50vh] rounded-t-xl bg-[#004D43] pt-10  ">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap mt-8 ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[34vh] leading-none font-bold uppercase  tracking-tighter px-5  "
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[34vh] leading-none font-bold uppercase tracking-tighter px-5"
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="text-[34vh] leading-none font-bold uppercase tracking-tighter px-5"
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
