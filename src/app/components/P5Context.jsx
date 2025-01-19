"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { getEffectList } from "../effects/Effects";

const P5Context = createContext();

export const P5Provider = ({ sketch, children }) => {

const effectList = getEffectList();

const defaultProps = {
  initImgUrl: "/ostrich.jpg",
  effectList,
};

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
          console.log( sketchProps )

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
