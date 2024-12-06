"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { getEffectsArr } from "../effects/Effects";

const layerTypes = getEffectsArr();
const defaultProps = {
  initImgUrl: "/ostrich.jpg",
  layerList: [
    {
      ...layerTypes[0],
      id: 0,
      draggableId: `${layerTypes[0].schema.title}_0`,
      name: layerTypes[0].schema.title,
      values: { ...layerTypes[0].values },
    },
    {
      ...layerTypes[1],
      id: 1,
      draggableId: `${layerTypes[1].schema.title}_0`,
      name: layerTypes[1].schema.title,
      values: { ...layerTypes[1].values },
    },
    {
      ...layerTypes[2],
      id: 2,
      draggableId: `${layerTypes[2].schema.title}_0`,
      name: layerTypes[2].schema.title,
      values: { ...layerTypes[2].values },
    },
    {
      ...layerTypes[3],
      id: 3,
      draggableId: `${layerTypes[3].schema.title}_0`,
      name: layerTypes[3].schema.title,
      values: { ...layerTypes[3].values },
    },
    {
      ...layerTypes[4],
      id: 4,
      draggableId: `${layerTypes[4].schema.title}_0`,
      name: layerTypes[4].schema.title,
      values: { ...layerTypes[4].values },
    },
  ],
};
const P5Context = createContext();

export const P5Provider = ({ sketch, children }) => {
  const parentRef = useRef(null);
  const p5InstanceRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 450, height: 450 });
  const [sketchProps, setSketchProps] = useState(defaultProps);

  const loadSketchImage = (newImageUrl) => {
    if (!p5InstanceRef.current) return;
    p5InstanceRef.current.customLoadImage(newImageUrl);
  };

  const resizeCanvas = ({ width, height }) => {
    if (!p5InstanceRef.current) return;
    const newWidth = width || parseInt(Math.random(200) + 100);
    const newHeight = height || parseInt(Math.random(200) + 100);
    setCanvasSize({ width: newWidth, height: newHeight });
    p5InstanceRef.current.changeCanvasSize(canvasSize);
  };

  const changeSketchProps = (newProps) => {
    if (!p5InstanceRef.current) return;
    setSketchProps(newProps);
    p5InstanceRef.current.updateProps(sketchProps);
  };

  useEffect(() => {
    const initP5 = async () => {
      if (p5InstanceRef.current) {
        // console.log("Removing existing p5 instance");
        p5InstanceRef.current.remove();
      }
      const p5 = (await import("p5")).default;
      // console.log("Initializing new p5 instance");
      p5InstanceRef.current = new p5((p) => {
        if (parentRef.current) {
          // console.log("Attaching canvas to parentRef");
          sketch(p, parentRef.current, sketchProps);
        }
      });
      setIsInitialized(true);
    };

    initP5();

    return () => {
      if (p5InstanceRef.current) {
        // console.log("Cleaning up p5 instance");
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [sketch]);

  useEffect(() => {
    if (!p5InstanceRef.current) return;
    p5InstanceRef.current.changeCanvasSize(canvasSize);
  }, [canvasSize]);

  useEffect(() => {
    if (!p5InstanceRef.current) return;
    p5InstanceRef.current.updateProps(sketchProps);
  }, [sketchProps]);

  return (
    <P5Context.Provider
      value={{
        p5Instance: p5InstanceRef.current,
        isInitialized,
        parentRef,
        sketchProps,
        changeSketchProps,
        loadSketchImage,
        canvasSize,
        resizeCanvas,
      }}
    >
      {children}
    </P5Context.Provider>
  );
};

export const useP5Context = () => useContext(P5Context);
