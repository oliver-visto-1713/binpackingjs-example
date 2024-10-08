'use client';
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import BoxContainer from "../_components/box-container";
import BoxItem from "../_components/box-item";
import { Bin, Item, Packer } from '@owens3364/3d-bin-packing';

import data from "@/app/3d/data/data.json"
export default function BinCanvas() {
  const cameraControlRef = useRef(null);
  // const BinPacking3D = require("binpackingjs").BP3D;
  // const { Item, Bin, Packer } = BinPacking3D;
  const container = {
    name: 'sample1',
    x: 20,
    y: 20,
    z: 20
  }
  const items = [
    {
      name: "1",
      x: 20,
      y: 3,
      z: 3,
    },

    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 20,
      y: 3.5,
      z: 1,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }, {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }, {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }, {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }, {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    },
    {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }, {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
    , {
      name: "1",
      x: 5,
      y: 5,
      z: 5,
    }
  ]
  // const items = [
  //   {
  //     "id": 99,
  //     "x": 13.75,
  //     "y": 8,
  //     "z": 9.5,
  //     "l": 13.75,
  //     "w": 9.5,
  //     "h": 8,
  //     "name": "Sistema Food Storage Container Set, 28-pieces",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 98,
  //     "x": 11,
  //     "y": 9.75,
  //     "z": 2.5,
  //     "l": 11,
  //     "w": 2.5,
  //     "h": 9.75,
  //     "name": "Dove Deep Moisture Body Wash, 3 x 680 mL",
  //     "measurementType": "inches",
  //     "color": "#FFD700"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 103,
  //     "x": 9,
  //     "y": 2.25,
  //     "z": 3.5,
  //     "l": 9,
  //     "w": 3.5,
  //     "h": 2.25,
  //     "name": "Q-Tips Cotton Swabs. Ideal for Blending & Applying Make-up, Cleaning Electronics and More",
  //     "measurementType": "inches",
  //     "color": "#FF69B4"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   },
  //   {
  //     "id": 99,
  //     "x": 13.75,
  //     "y": 8,
  //     "z": 9.5,
  //     "l": 13.75,
  //     "w": 9.5,
  //     "h": 8,
  //     "name": "Sistema Food Storage Container Set, 28-pieces",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 98,
  //     "x": 11,
  //     "y": 9.75,
  //     "z": 2.5,
  //     "l": 11,
  //     "w": 2.5,
  //     "h": 9.75,
  //     "name": "Dove Deep Moisture Body Wash, 3 x 680 mL",
  //     "measurementType": "inches",
  //     "color": "#FFD700"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 101,
  //     "x": 10.75,
  //     "y": 1.5,
  //     "z": 3.25,
  //     "l": 10.75,
  //     "w": 3.25,
  //     "h": 1.5,
  //     "name": "Nº 4 Spaghetti PÂTES - Antonio Amato - 500 g",
  //     "measurementType": "inches",
  //     "color": "#FF8C00"
  //   },
  //   {
  //     "id": 103,
  //     "x": 9,
  //     "y": 2.25,
  //     "z": 3.5,
  //     "l": 9,
  //     "w": 3.5,
  //     "h": 2.25,
  //     "name": "Q-Tips Cotton Swabs. Ideal for Blending & Applying Make-up, Cleaning Electronics and More",
  //     "measurementType": "inches",
  //     "color": "#FF69B4"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   },
  //   {
  //     "id": 104,
  //     "x": 7,
  //     "y": 3,
  //     "z": 5,
  //     "l": 7,
  //     "w": 5,
  //     "h": 3,
  //     "name": "Antonio Amato - Fusilli No.114 - 500gm 810026810244",
  //     "measurementType": "inches",
  //     "color": "#40E0D0"
  //   }
  // ]

  const packer = new Packer();

  const bin = new Bin("bin1", container.x, container.y, container.z)
  const binContainer = { x: bin.width, y: bin.height, z: bin.depth };
  for (const item of items) {
    const i = new Item(item.name, item.x, item.y, item.z)
    packer.addItem(i)
  }
  packer.addBin(bin);
  packer.pack();
  // let bin = new Bin("Bin A1", 50, 50, 50, 125000);
  // let parcel1 = new Item("P1", 50, 25, 25, 200);
  // let parcel2 = new Item("P2", 50, 25, 25, 200);
  // let parcel3 = new Item("P3", 25, 25, 25, 150);
  // let parcel4 = new Item("P4", 25, 25, 25, 150);
  // let parcel5 = new Item("P4", 25, 12, 25, 50);
  // let parcel6 = new Item("P4", 25, 12, 25, 50);
  // let parcel7 = new Item("P4", 25, 12, 25, 50);
  // let parcel8 = new Item("P4", 25, 12, 25, 50);

  // let packer = new Packer();

  // packer.addBin(bin);

  // packer.addItem(parcel1);
  // packer.addItem(parcel2);
  // packer.addItem(parcel3);
  // packer.addItem(parcel4);
  // packer.addItem(parcel5);
  // packer.addItem(parcel6);
  // packer.addItem(parcel7);
  // packer.addItem(parcel8);

  // // pack items into bin1
  // packer.pack();
  // const bp3d = require('../bp3d.js');
  // Define the bin with appropriate dimensions for packing
  // const containers = data.containers
  // const packer = new Packer();
  // const c = containers[0]
  // const bin = new Bin(`bin-${c.id}`, c.x, c.y, c.z)
  // packer.addBin(bin)
  // for (const item of c.boxItems) {
  //   const i = new Item(`item-${item.id}`, item.x, item.y, item.z)
  //   packer.addItem(i)
  // }
  // packer.pack()

  console.log(bin.items)

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
            {bin.items.map((item, index) => (
              <BoxItem key={index} item={item} container={bin} placedItems={bin.items} />
            ))}
          </React.Fragment>
        </Canvas>
      </div>
      <div className="bg-blue-500">Packed Items: {bin.items.length}</div>
    </div>
  );
}
