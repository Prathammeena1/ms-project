import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, useTexture } from "@react-three/drei";
import { gsap } from "gsap";

// Animated Box Component
const AnimatedBox = ({ onHover, onUnhover, scale = 1 }) => {
  const boxRef = useRef();

  // Load multiple textures for different faces
  const textures = useTexture([
    "/images/service1I.png", // Right face
    "/images/service1I.png", // Left face
    "/images/service1I.png", // Top face
    "/images/service1C.png", // Bottom face
    "/images/service1C.png", // Front face
    "/images/service1C.png", // Back face
  ]);

  const handleHover = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current.rotation, {
        x: .8,
        duration: 0.5,
        ease: "power2.out",
      });
    }
    onHover(); // Call parent hover handler
  };

  const handleUnhover = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current.rotation, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
    onUnhover(); // Call parent unhover handler
  };

  return (
    <mesh
      ref={boxRef}
      position={[0, 0, 0]}
      scale={[scale, scale, scale]}
      onPointerEnter={handleHover}
      onPointerLeave={handleUnhover}
    >
      <boxGeometry args={[10, 2.3, 1.8]} />
      {/* Each face gets different material/texture */}
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

// Lighting Component with dynamic intensity
const DynamicLighting = ({ isHovered }) => {
  const lightRef = useRef();

  // Animate light intensity based on hover state
  React.useEffect(() => {
    if (lightRef.current) {
      gsap.to(lightRef.current, {
        intensity: isHovered ? 2 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  return <ambientLight ref={lightRef} intensity={1} />;
};

// Main Scene Component
const ServiceScene = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1);

  // Function to calculate scale based on window width
  const calculateScale = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 1;        // Desktop: full scale
    else if (width >= 768) return 0.8;  // Tablet: 80% scale
    else if (width >= 480) return 0.6;  // Mobile landscape: 60% scale
    else return 0.4;                    // Mobile portrait: 40% scale
  };

  // Update scale on window resize
  useEffect(() => {
    const updateScale = () => {
      setScale(calculateScale());
    };

    // Set initial scale
    updateScale();

    // Add resize listener
    window.addEventListener('resize', updateScale);

    // Cleanup
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleBoxHover = () => {
    setIsHovered(true);
  };

  const handleBoxUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        style={{ background: "transparent" }}
      >
        {/* Dynamic Lighting */}
        <DynamicLighting isHovered={isHovered} />

        {/* 3D Objects */}
        <AnimatedBox 
          onHover={handleBoxHover} 
          onUnhover={handleBoxUnhover} 
          scale={scale}
        />

        {/* Controls */}
        {/* <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} /> */}
      </Canvas>
    </div>
  );
};

export default ServiceScene;
