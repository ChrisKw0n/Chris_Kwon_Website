"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { Environment } from "@react-three/drei";
import { Leva } from "leva";

export default function Index() {
  return (
    <Canvas
      style={{ height: "80vh" }}
      camera={{ position: [0, 0, 5], fov: 20 }}
    >
      <Leva hidden={true} />
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
