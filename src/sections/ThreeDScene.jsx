import React, { useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// Box component for individual cards
const Box = ({
  position,
  color,
  textureUrl,
  rotation = [0, Math.PI / 2, 0],
  geometry = [0.1, 2, 1.5],
  initialZ = 0,
}) => {
  const meshRef = useRef();
  
  // Load texture if provided
  const texture = textureUrl ? useTexture(textureUrl) : null;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
      },
    });

    // Animation from initial position to target position and back
    tl.to(meshRef.current.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1,
      ease: "power2.inOut",
    }).to(meshRef.current.position, {
      x: 0,
      y: 0,
      z: initialZ,
      duration: 1,
      ease: "power2.inOut",
    });

    return () => tl.kill();
  }, [position, initialZ]);

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, initialZ]}
      rotation={rotation}
    >
      <boxGeometry args={geometry} />
      {texture ? (
        <meshBasicMaterial map={texture} />
      ) : (
        <meshBasicMaterial color={color} />
      )}
    </mesh>
  );
};

// Camera controller component
const CameraController = () => {
  const { camera } = useThree();
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
      },
    });

    // Animate only camera position on scroll
    tl.to(camera.position, {
      // x: 2,
      // y: 1,
      z: 8,
      duration: 2,
      ease: "power2.inOut",
    }).to(camera.position, {
      // x: 2,
      // y: 1,
      z: 5,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [camera]);

  return null;
};

// Scene content component
const SceneContent = () => {
  const groupRef = useRef();

  // Card configurations
  const cardPositions = [
    [-5.5, 2.5, 0.5],
    [6.5, 2.5, 1],
    [3.5, 0.5, -1.5],
    [-4.5, -2.5, 1.5],
    [-1.5, 0, -1.5],
    [4.5, -1.5, -0.2],
  ];

  const cardGeometry = [
    [0.01, 2.5, 3.5],
    [0.01, 2, 4],
    [0.01, 2, 1.5],
    [0.01, 2, 4],
    [0.01, 3, 2.5],
    [0.01, 2, 3.5],
  ];

  const cardTextures = [
    "https://framerusercontent.com/images/LIKj0ycCusjj7epoyaWT9jAXg.jpg",
    "https://framerusercontent.com/images/xfTitS1dGMwrx86JR7fa0GvTUo.png",
    "https://framerusercontent.com/images/VRo7Gu11Cr5abMrafWymIQjBoQg.png?scale-down-to=2048",
    "https://framerusercontent.com/images/97wAqz9a3jheETchGALXx7nfwdY.png",
    "https://framerusercontent.com/images/KR67j0iobgAiyLsdkq013OjyA0k.jpg",
    "https://framerusercontent.com/images/OhuLpbIIcrHqbs2c8PY1j1hDeY.png",
  ];

  const cardColors = [
    "#ff6b6b",
    "#4ecdc4",
    "#ffe66d",
    "#a8e6cf",
    "#ff9999",
    "#99ccff",
  ];

  // Group rotation animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 0",
        end: "top -100%",
        scrub: 1,
      },
    });

    tl.to(groupRef.current.rotation, {
      x: -Math.PI * 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1.2} color="#ffffff" />

      {/* Cards group */}
      <group ref={groupRef}>
        {/* Background cards */}
        {cardPositions.map((position, index) => (
          <Box
            key={index}
            position={position}
            color={cardColors[index]}
            textureUrl={cardTextures[index]}
            geometry={cardGeometry[index]}
            initialZ={index * -0.1}
          />
        ))}

        {/* Main card in front */}
        <Box
          position={[0, 0, 3]}
          textureUrl={"https://framerusercontent.com/images/OcZpI67zPDNa1EDSotychNh80.jpg?scale-down-to=1024"}
          geometry={[0.004, 5, 8.5]}
          initialZ={1}
        />
      </group>

      {/* Camera controller */}
      <CameraController />
    </>
  );
};

const ThreeDScene = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="scroll-container h-[200vh] w-full relative"
    >
      <div className="h-screen w-full sticky top-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{
            background: "transparent",
          }}
        >
          <SceneContent />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDScene;
