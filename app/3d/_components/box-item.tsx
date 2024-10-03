import { generateColor } from "@/constants/colors";
import { DIVIDER } from "@/constants/divider";
import { Vector3 } from "three";

interface Item {
  name: string,
  width: number,
  height: number,
  depth: number,
  allowedRotation: number[],
  position: number[]
  rotationType: number
  weight: number
}
export default function BoxItem({ item }: { item: Item }) {
  const { width, height, depth, position } = item;
  const w = width / DIVIDER;
  const h = height / DIVIDER;
  const d = depth / DIVIDER
  const posX = position[0] / DIVIDER
  const posY = position[1] / DIVIDER
  const posZ = position[2] / DIVIDER
  const pos = new Vector3(posX, posY, posZ)
  console.log('item', item)
  console.log('item', item.position)
  const max = 10;


  const color = generateColor()
  return (
    <>
      <mesh position={pos}>
        <boxGeometry args={[w, h, d]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </>
  )
}