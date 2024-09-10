import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

function Earth() {
  const map = useLoader(TextureLoader, "/earth/8k_earth_specular_map.jpg");
  return (
    <>
      <ambientLight intensity={2.9} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="#6eb5aa" />
        <meshStandardMaterial map={map} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}

export default Earth;
