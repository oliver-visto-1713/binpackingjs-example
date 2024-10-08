import * as THREE from 'three';
import { DIVIDER } from '@/constants/divider';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BoxContainer({ bin: { x, y, z } }: { bin: { x: number, y: number, z: number } }) {
  const xx = x / DIVIDER
  const yy = y / DIVIDER
  const zz = z / DIVIDER
  console.log(x / 100000)
  const boxGeometry = new THREE.BoxGeometry(xx, zz, yy);
  const geo = new THREE.EdgesGeometry(boxGeometry);
  const mat = new THREE.LineBasicMaterial({ color: "royalblue", linewidth: 2 });
  const position = new THREE.Vector3(0, 0, 0)
  return (
    <>
      <mesh position={position}>
        <lineSegments args={[geo, mat]} />
      </mesh>
    </>
  )
}