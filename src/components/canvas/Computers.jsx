import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-y={Math.PI * 0.0}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.22}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.04}
        position={isMobile ? [-7, -3, -2.2] : [0, -5.25, -4.5]}
        rotation={[-0.01, -0.1, -0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const mesh = canvasRef.current;

    let start = null;
    const duration = 10000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const rotation = (progress / duration) * 360;

      mesh.rotation.y = (rotation * Math.PI) / 180;

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 3, 15], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} ref={canvasRef} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
