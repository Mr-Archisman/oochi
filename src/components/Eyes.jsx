import React, { useEffect, useState } from "react";

function Eyes() {
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
    <div  className="-z-[1] eyes w-full h-screen ">
      <div   className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div   className="   absolute top-1/2    left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-7 justify-center ">
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
  );
}

export default Eyes;
