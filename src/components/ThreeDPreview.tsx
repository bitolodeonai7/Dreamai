import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function Character() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#4F46E5"
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
}

const ThreeDPreview = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={true} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Character />
      </Canvas>
    </div>
  );
};

export default ThreeDPreview;