import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Kidney(props) {
  const { nodes, materials } = useGLTF("/human_kidney.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.363}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.kidney02kidney03Group12708_Kidney_Tex_0.geometry}
            material={materials.Kidney_Tex}
            position={[126.797, -12.19, 3.735]}
            scale={98.682}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group12708_Kidney_Tex_0.geometry}
            material={materials.Kidney_Tex}
            position={[-129.393, 12.44, -3.812]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={98.682}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/human_kidney.glb");
