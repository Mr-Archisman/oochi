import React, { useEffect, useState }  from "react";

function Ready() {
    
    const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaX, deltaY) * (180/Math.PI);
      setRotate(angle-180);
    });
  });
  return (
    <div className="relative w-full h-[140vh] bg-[#CDEA68] flex flex-col items-center justify-center">
      <h1 className="text-[170px] text-zinc-900 font-extrabold uppercase text-center tracking-tight leading-none">
        Ready 
      </h1>
      <h1 className="text-[170px]  text-zinc-900 font-extrabold uppercase text-center tracking-tight leading-none">
         To Start 
      </h1>
      <h1 className="text-[170px]  text-zinc-900 font-extrabold uppercase text-center tracking-tight leading-none">
         The Project
      </h1>
      <div className=" mt-64 px-5 py-5 bg-zinc-900 rounded-full w-fit  ">
        <h1 className="uppercase tracking-tight flex items-center">Start The Project <div className="w-2 h-2 rounded-full bg-white ml-6"></div> </h1>
      </div>
      <div className="absolute eyes w-full h-screen ">
      <div className="relative w-full h-full bg-cover bg-center ]">
        <div className="   absolute top-1/2    left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-7 justify-center ">
          <div data-scroll data-scroll-section data-scroll-speed="-.2" className="bg-zinc-100 h-44 w-44 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative bg-black rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="  line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full ">
                <div className="bg-white h-7 w-7 rounded-full"></div>
              </div>
            </div>
          </div>
          <div data-scroll data-scroll-section data-scroll-speed="-.2" className="bg-zinc-100 h-44 w-44 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative bg-black rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full ">
                <div className="bg-white h-7 w-7 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Ready;
