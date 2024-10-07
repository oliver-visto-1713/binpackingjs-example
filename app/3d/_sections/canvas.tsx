'use client';
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import BoxContainer from "../_components/box-container";
import BoxItem from "../_components/box-item";
import { Bin, Item, Packer } from '@owens3364/3d-bin-packing';

export default function BinCanvas() {
  const cameraControlRef = useRef(null);
  // const bp3d = require('../bp3d.js');
  // Define the bin with appropriate dimensions for packing
  const bin1 = new Bin("Le petite box", 30, 25, 25);

  // Add multiple items of different sizes to fill up the bin
  const itemsToPack = [
    new Item("Item 1", 15, 12, 12),
    new Item("Item 1", 15, 12, 12),
    new Item("Item 1", 15, 12, 12),
    new Item("Item 1", 12, 15, 12),
  ];

  // Initialize the packer and pack the items into the bin
  const packer = new Packer();
  packer.addBin(bin1);
  itemsToPack.forEach(item => packer.addItem(item));  // Add all items
  packer.pack() // Perform the packing operation

  // Define the bin container dimensions for rendering
  const binContainer = { x: bin1.width, y: bin1.height, z: bin1.depth };
  // Get the packed items from the bin after packing
  const packedItems = bin1.items;

  console.log("bin", bin1);  // Log packed items for debugging

  return (
    <div className="flex w-full h-full">
      <div className="bg-slate-100 h-[60vh] w-full md:w-[60%]">
        <Canvas>
          <CameraControls ref={cameraControlRef} />
          <React.Fragment>
            {/* Render the box container */}
            <BoxContainer bin={binContainer} />
            {/* Loop through the packed items and render each BoxItem */}

          </React.Fragment>
          <React.Fragment>
            {packedItems.map((item, index) => (
              <BoxItem key={index} item={{ ...item }} container={bin1} placedItems={packedItems} />
            ))}
          </React.Fragment>
        </Canvas>
      </div>
      <div className="bg-blue-500">Packed Items: {packedItems.length}</div>
    </div>
  );
}
