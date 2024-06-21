import React from "react";

import Kidney from "./3D/Kidney";
import Navbar from "./Navbar";
import { kidneyImg } from "../assets";
import Footer from "./Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Home = () => {
  return (
    <main className="px-5 bg-black ">
      <Navbar />
      <section className="w-full relative h-screen flex flex-col md:flex-row text-white">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="w-[65%]">
            <h1 className="text-3xl font-semibold uppercase py-5">
              kidney spot
            </h1>
            <ul className="flex flex-col gap-4 my-4">
              <li>✅ Accurecy</li>
              <li>✅ Open Source</li>
              <li>✅ Kidney Classification</li>
              <li>✅ Automated Reporting</li>
            </ul>
            <button className="bg-green-600 px-6 py-3">
              Request Reporting
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          {/* <img src={kidneyImg} alt="" /> */}
          <Canvas>
            <Stage environment={"studio"} intensity={0.5}>
              <Kidney />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
        <div className="pink__gradient w-[30%] h-[30%] absolute -z-0 left-[40%]" />
        <div className="aqua__gradient w-[30%] h-[30%] absolute -z-0 bottom-[40%]" />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
