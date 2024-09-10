"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./Earth";

function Scene() {
  return (
    <div className="w-full h-screen">
      <Canvas>
       <Suspense fallback={null}>
        <Earth />
       </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
