import React from "react";
import * as THREE from "three";
const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        color="white"
        intensity={100}
        angle={0.15}
        penumbra={0.2}
      />
      <spotLight
        position={[4, 5, 4]}
        color="#4cc9f0"
        intensity={40}
        angle={0.3}
        penumbra={0.5}
      />
      <spotLight
        position={[-3, 5, 5]}
        color="#9d4edd"
        intensity={60}
        angle={0.4}
        penumbra={1}
      />
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} color="#7209b7" intensity={10} />
      <pointLight position={[1, 2, -2]} color="#0d00a4" intensity={10} />
    </>
  );
};

export default HeroLights;
