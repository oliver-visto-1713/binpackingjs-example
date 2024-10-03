'use client';
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import BoxContainer from "../_components/box-container";
import BoxItem from "../_components/box-item";

const BinPacking3D = require('binpackingjs').BP3D;

export default function BinCanvas() {
  const cameraControlRef = useRef(null);
  const { Item, Bin, Packer } = BinPacking3D;

  // Adjust the bin and item dimensions to be appropriate for visualization
  let bin1 = new Bin("Le petite box", 30, 25, 25, 1000);
  let item1 = new Item("Item 1", 5, 10, 10, 200);
  let item2 = new Item("Item 2", 5, 10, 10, 200);
  let item3 = new Item("Item 3", 5, 10, 10, 200);
  let packer = new Packer();

  packer.addBin(bin1);
  packer.addItem(item1);
  packer.addItem(item2);
  packer.addItem(item3);
  packer.pack();

  const bincontainer = { x: bin1.width, y: bin1.height, z: bin1.depth };
  let items = bin1.items;
  console.log("Items to render:", items);
  return (
    <div className="flex w-full h-full">
      <div className="bg-slate-100 h-[60vh] w-full md:w-[60%]">
        <Canvas>
          <CameraControls ref={cameraControlRef} />
          <React.Fragment>
            23232
            <BoxContainer bin={bincontainer} />
            {items.map((b, i) => {
              return <BoxItem key={i} item={{ ...b }} />;
            })}
          </React.Fragment>
        </Canvas>
      </div>
      <div className="bg-blue-500">12312321</div>
    </div>
  );
}
