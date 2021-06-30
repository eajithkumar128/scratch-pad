import React, { useEffect, useState, useRef } from "react";
import CatSprite from "./CatSprite";
import { fabric } from "fabric";
import {spriteFunctionality} from "../Utils"

export default function PreviewArea(props) {
  const [canvas, setCanvas] = useState('');
  const containerRef = useRef()
  const canvasRef = useRef();
  const fabricRef = useRef();

  useEffect(()=>{
    if(fabricRef.current){
      let canvas = fabricRef.current;
      let selectedObject = canvas.getActiveObject()
      spriteFunctionality(props.events,selectedObject, canvas);
    }
  },[props])


  const initCanvas = ({canvas}) =>{
    fabric.loadSVGFromURL('catSprite.svg', function(objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj.set({'hasBorders':false, 'hasControls': false, 'top': 100, left: 50})
      canvas.add(obj).renderAll();
      canvas.setActiveObject(obj);
    });
  }

  useEffect(()=>{
    const canvas = new fabric.Canvas('canvas', {
      width: containerRef.current.clientWidth + 150,
      height: containerRef.current.clientHeight ,
      selection: false, // disables drag-to-select
    });
    fabricRef.current = canvas;
    initCanvas({ canvas });
  },[])

  return (
    <>
    <div id="canvas-container"  ref={containerRef}  className="relative flex-none h-full overflow-y-auto p-2">
      <canvas id="canvas" ref={canvasRef} ></canvas>
    </div>
    <div></div>
    </>
  );
}
