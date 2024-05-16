import { motion, useAnimation } from "framer-motion";
import gsap, { Power4 } from "gsap";
import React, { useState } from "react";

function Featured() {
  
  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()]
  const handleHover = (e) => {
    cards[e].start({y:"0"})
  };
  const handleHoverEnd = (f) => {
    cards[f].start({y:"100%"})
  }

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full h-full bg-zinc-900"
    >
      <h1 className='pt-14 pb-8 px-5 text-3xl font-semibold font-["Nueue_Montreal"]'>
        Featured Projects
      </h1>
      <div className="border-t-[1px] border-zinc-800  py-10 px-4 ">
        <h2 className="mb-5 text-3xl font-semibold font-['Nueue_Montreal']">
          FYDE
        </h2>
        <div className="flex ">
          <motion.div onHoverStart={()=>handleHover(0)} 
          onHoverEnd={()=>handleHoverEnd(0)} className="  relative cardcontainer   h-[70vh] w-1/2">
            <h1 className="absolute left-full top-1/2 -translate-x-1/2 flex -translate-y-1/2 text-5xl text-[#CDEA68] z-[9] overflow-hidden ">
              {"FYDE".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.83, 0, 0.17, 1] , delay : index*.08}} style={{backgroundColor:"black",opacity:".8"}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="rounded-xl  scale-95 card w-full h-full overflow-hidden  ">
              <img
                className="w-full h-full bg-cover  "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)} 
          onHoverEnd={()=>handleHoverEnd(1)} className="relative cardcontainer h-[70vh] w-1/2">
            <h1 className="absolute right-full top-1/2 flex overflow-hidden translate-x-1/2 -translate-y-1/2 text-5xl text-[#CDEA68] z-[9] ">
              {"VISE".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.83, 0, 0.17, 1] , delay : index*.08}} style={{backgroundColor:"black",opacity:".8"}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="rounded-xl  scale-95 card w-full h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover  "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className=" flex ">
          <motion.div onHoverStart={()=>handleHover(2)} 
          onHoverEnd={()=>handleHoverEnd(2)} className="relative cardcontainer  h-[70vh] w-1/2">
            <h1 className="absolute left-full top-1/2 -translate-x-1/2 flex -translate-y-1/2 text-5xl text-[#CDEA68] z-[9] overflow-hidden ">
              {"TRAWA".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[2]} transition={{ease: [0.83, 0, 0.17, 1] , delay : index*.08}} style={{backgroundColor:"black",opacity:".8"}} className="inline-block">{item}</motion.span>
              ))}
            </h1>
            <div className="rounded-xl  scale-95 card w-full h-full overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(3)} 
          onHoverEnd={()=>handleHoverEnd(3)} className="relative cardcontainer   h-[70vh] w-1/2">
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-5xl text-[#CDEA68] z-[9] whitespace-nowrap flex overflow-hidden">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[3]} transition={{ease: [0.83, 0, 0.17, 1] , delay : index*.04}} style={{backgroundColor:"black",opacity:".8"}} className="inline-block">{item}</motion.span>
              ))}
            </h1>

            <div className="rounded-xl  scale-95 card w-full h-full  overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
