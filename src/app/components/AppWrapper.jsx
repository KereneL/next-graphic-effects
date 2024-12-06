"use client";

import { P5Provider } from "./P5Context";
import P5Canvas from "./P5Canvas";
import ToolPanel from "./ToolPanel";
import { sketch } from "./sketch";
import React from "react";

export default function AppWrapper() {
  return (
    <div className="grid justify-items-center p-8 pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
      <P5Provider sketch={sketch}>
        <P5Canvas />
        <ToolPanel />
      </P5Provider>
    </div>
  );
}
