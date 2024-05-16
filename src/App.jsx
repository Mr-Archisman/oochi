import { React, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Marque from "./components/Marque";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return <div className=" min-h-screen w-full bg-zinc-900  text-white">
    <Navbar />
    <Landing />
    <Marque />
    <About />
    <Eyes />
    <Featured />
    <Cards />
    <Ready />
    <Footer />
  </div>;
}

export default App;
