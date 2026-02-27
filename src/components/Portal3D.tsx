import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, GradientTexture, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function Portal3D() {
  const portalRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (portalRef.current) {
      portalRef.current.rotation.y = t * 0.5;
      portalRef.current.rotation.z = t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Portal Sphere */}
        <mesh ref={portalRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          >
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={['#000000', '#8b0000', '#ff0000']}
            />
          </MeshDistortMaterial>
        </mesh>

        {/* Outer Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Energy Particles */}
        <Sparkles
          count={100}
          scale={5}
          size={2}
          speed={0.5}
          color="#ff0000"
          opacity={0.5}
        />
      </Float>

      {/* Point Light inside portal */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#ff0000" distance={10} />
    </group>
  );
}
