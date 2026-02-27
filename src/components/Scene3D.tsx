import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Stars, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import Portal3D from './Portal3D';

function FloatingObject() {
  const meshRef = useRef<THREE.Group>(null);

  // We'll use a simple group of lights as the "Christmas lights" object
  // since we don't have a local GLB file.
  const lightPositions = [
    [-1, 0, 0], [1, 0, 0], [0, 1, 0], [0, -1, 0],
    [-0.7, 0.7, 0], [0.7, 0.7, 0], [-0.7, -0.7, 0], [0.7, -0.7, 0]
  ];

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group ref={meshRef} position={[4, 2, -2]}>
        {lightPositions.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#ff0000" : "#ffff00"}
              emissive={i % 2 === 0 ? "#ff0000" : "#ffff00"}
              emissiveIntensity={2}
            />
            <pointLight color={i % 2 === 0 ? "#ff0000" : "#ffff00"} intensity={0.5} distance={2} />
          </mesh>
        ))}
        {/* Connecting Wire */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[1.2, 0.01, 16, 100]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene3D({ showPortal = false }: { showPortal?: boolean }) {
  return (
    <div className="scene-3d-container">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        
        {/* Real Fog Effect */}
        <fog attach="fog" args={['#0a0000', 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {showPortal && <Portal3D />}
        
        <FloatingObject />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Drifting Particles */}
        <group>
          {Array.from({ length: 50 }).map((_, i) => (
            <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
              <mesh position={[Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]}>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshStandardMaterial color="#ff0000" transparent opacity={0.3} />
              </mesh>
            </Float>
          ))}
        </group>
      </Canvas>
    </div>
  );
}
