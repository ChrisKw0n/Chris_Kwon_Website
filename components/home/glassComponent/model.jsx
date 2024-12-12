import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  let nodes = null;
  try {
    // Attempt to load the model
    const gltf = useGLTF("/media/torrus.glb");
    nodes = gltf.nodes;
    console.log("GLTF model loaded successfully:", gltf);
  } catch (error) {
    // Log detailed error if loading fails
    console.error("Failed to load GLTF model:", error);
  }

  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
    color: "#C3B1E1",
  });

  // Only render the scene if the model is loaded
  if (!nodes) {
    return (
      <group>
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="red"
          anchorX="center"
          anchorY="middle"
        >
          Failed to load model
        </Text>
      </group>
    );
  }

  return (
    <group scale={viewport.width / 5}>
      <Text
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hey There!
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
