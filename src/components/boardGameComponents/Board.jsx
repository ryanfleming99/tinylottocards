import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";

const DiveRollScene = () => {
  const cameraRef = useRef(); // Reference for the camera

  // Dive roll function
  const diveRoll = () => {
    if (cameraRef.current) {
      const initialPosition = cameraRef.current.position.clone();
      const rollDistance = 5;

      // Animate the camera position and rotation
      gsap.to(cameraRef.current.position, {
        duration: 1,
        x: initialPosition.x + rollDistance,
        y: initialPosition.y - 2,
        z: initialPosition.z - rollDistance,
        ease: "power2.inOut"
      });

      gsap.to(cameraRef.current.rotation, {
        duration: 1,
        x: cameraRef.current.rotation.x + Math.PI * 0.5, // 90-degree pitch roll
        ease: "power2.inOut"
      });
    }
  };

  return (
    <>
      {/* Canvas for the 3D scene */}
      <Canvas camera={{ position: [0, 2, 5] }} ref={cameraRef}>
        {/* Box for reference */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="green" />
        </mesh>

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* OrbitControls for camera movement */}
        <OrbitControls />
      </Canvas>

      {/* Button to trigger the dive roll */}
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <button
          onClick={diveRoll}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          Dive Roll
        </button>
      </div>
    </>
  );
};

export default DiveRollScene;
