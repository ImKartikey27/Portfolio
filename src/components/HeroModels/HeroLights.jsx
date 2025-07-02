import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={80}
      color="white"
    />
    <spotLight
      position={[10,5,-1]}
      angle={0.15}
      penumbra={0.2}
      intensity={80}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={40}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={60}
      color="#9d4edd"
    />
     <spotLight
      position={[-6, 4, 2]}
      angle={0.5}
      penumbra={0.8}
      intensity={35}
      color="#f72585"
    />

    {/* right face light */}
    <spotLight
      position={[6, 4, 2]}
      angle={0.5}
      penumbra={0.8}
      intensity={35}
      color="#3a86ff"
    />

    {/* back light */}
    <spotLight
      position={[0, 4, -6]}
      angle={0.6}
      penumbra={0.7}
      intensity={80}
      color="#b9fbc0"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;