import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

import { useState } from "react";

const CanvasModel = ({ value }) => {
  const windowWidth = window.innerWidth;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: windowWidth <= 800 ? 30 : 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in  "
    >
      <ambientLight intensity={0.5} />
      {/* changed from city to studio */}

      <Environment preset={value} />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
