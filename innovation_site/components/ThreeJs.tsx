"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh } from "three";

const MeshComponent = () => {
  const fileUrl = "/3dmodels/shiba.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export function ThreeJS() {
  return (
    <Canvas className="h-[300px] w-full">
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MeshComponent />
    </Canvas>
  );
}
