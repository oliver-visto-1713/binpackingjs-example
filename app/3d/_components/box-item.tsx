import { generateColor } from "@/constants/colors";
import { DIVIDER } from "@/constants/divider";

import * as THREE from "three";
export default function BoxItem({ item, container, placedItems }: { item: any, container: any, placedItems: any[] }) {
  const { width, height, depth, position, rotationType } = item;

  let w = width / DIVIDER;
  let h = height / DIVIDER;
  let d = depth / DIVIDER;
  // Handle rotation based on rotationType
  // export const RotationTypeStrings = {
  //   [RotationType_WHD]: 'RotationType_WHD (w,h,d)',
  //   [RotationType_HWD]: 'RotationType_HWD (h,w,d)',
  //   [RotationType_HDW]: 'RotationType_HDW (h,d,w)',
  //   [RotationType_DHW]: 'RotationType_DHW (d,h,w)',
  //   [RotationType_DWH]: 'RotationType_DWH (d,w,h)',
  //   [RotationType_WDH]: 'RotationType_WDH (w,d,h)',
  // };
  switch (rotationType) {
    case 0: // No rotation
      // w, h, d remain the same
      break;
    case 1: // Rotate once (clockwise)
      [w, h, d] = [h, w, d]; // Swap width and height
      break;
    case 2: // Rotate twice (clockwise)
      [w, h, d] = [h, d, w]; // Swap width and depth
      break;
    case 3: // Rotate thrice (clockwise)
      [w, h, d] = [d, h, w]; // Swap height and depth
      break;
    case 4: // Rotate counter-clockwise once
      [h, w] = [d, w, h]; // Similar to clockwise once
      break;
    case 5: // Rotate counter-clockwise twice
      // For a distinct behavior, let's swap width and depth again
      [w, h, d] = [w, d, h]; // Swap height and depth
      break;
    default:
      break;
  }


  const cw = (container.width / DIVIDER) / 2;
  const ch = (container.height / DIVIDER) / 2;
  const cd = (container.depth / DIVIDER) / 2;
  const x = position[0] / DIVIDER
  const y = position[1] / DIVIDER
  const z = position[2] / DIVIDER
  // Calculate the cumulative height of placed items for correct Y positioning
  // let cumulativeHeight = 0;
  // placedItems.forEach(placedItem => {
  //   const placedHeight = placedItem.height / DIVIDER;
  //   cumulativeHeight += placedHeight; // Sum the heights of all placed items
  // });

  // Position calculations
  // const posX = (position[0] / DIVIDER + w / 2) - cw;
  // const posY = (position[1] / DIVIDER - (((position[1] / DIVIDER) / 2) - h / 2) + h / 2) - ch;
  // const posZ = (position[2] / DIVIDER + d / 2) - cd;
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
