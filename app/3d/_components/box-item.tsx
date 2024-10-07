import { generateColor } from "@/constants/colors";
import { DIVIDER } from "@/constants/divider";
import { Vector3 } from "three";
import * as THREE from "three";
export default function BoxItem({ item, container, placedItems }: { item: any, container: any, placedItems: any[] }) {
  const { _width, _height, _depth, _position, _rotationType } = item;

  let w = _width / DIVIDER;
  let h = _height / DIVIDER;
  let d = _depth / DIVIDER;
  // Handle rotation based on rotationType
  switch (_rotationType) {
    case 0: // No rotation
      // w, h, d remain the same
      break;
    case 1: // Rotate once (clockwise)
      [w, h] = [h, w]; // Swap width and height
      break;
    case 2: // Rotate twice (clockwise)
      [w, d] = [d, w]; // Swap width and depth
      break;
    case 3: // Rotate thrice (clockwise)
      [h, d] = [d, h]; // Swap height and depth
      break;
    case 4: // Rotate counter-clockwise once
      [h, w] = [w, h]; // Similar to clockwise once
      break;
    case 5: // Rotate counter-clockwise twice
      // For a distinct behavior, let's swap width and depth again
      [d, h] = [h, d]; // Swap height and depth
      break;
    default:
      break;
  }


  const cw = (container._width / DIVIDER) / 2;
  const ch = (container._height / DIVIDER) / 2;
  const cd = (container._depth / DIVIDER) / 2;
  const x = _position[0] / DIVIDER
  const y = _position[1] / DIVIDER
  const z = _position[2] / DIVIDER
  // Calculate the cumulative height of placed items for correct Y positioning
  // let cumulativeHeight = 0;
  // placedItems.forEach(placedItem => {
  //   const placedHeight = placedItem._height / DIVIDER;
  //   cumulativeHeight += placedHeight; // Sum the heights of all placed items
  // });

  // Position calculations
  // const posX = (_position[0] / DIVIDER + w / 2) - cw;
  // const posY = (_position[1] / DIVIDER - (((_position[1] / DIVIDER) / 2) - h / 2) + h / 2) - ch;
  // const posZ = (_position[2] / DIVIDER + d / 2) - cd;
  //- (x > 0 ? ((x / 2) - w / 2) : 0)
  //- (y > 0 ? ((y / 2) - h / 2) : 0)
  //- (z > 0 ? ((z / 2) - d / 2) : 0)
  const posX = x + w / 2 - cw
  const posY = y + h / 2 - ch
  const posZ = z + d / 2 - cd
  const color = generateColor();

  const boxGeometry = new THREE.BoxGeometry(w, h, d);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: color });
  boxGeometry.translate(posX, posY, posZ);
  const box = new THREE.Mesh(boxGeometry, boxMaterial);


  return (
    <>
      <primitive object={box} />
    </>
  );
}
