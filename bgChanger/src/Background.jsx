import React, { useState } from "react";
import ColorPannel from "./ColorPannel";

function Background() {
  const [color, setColor] = useState("lightgreen");

  const chColor = (cl) => {
    setColor(cl);
  };

  return (
    <div
      className={` h-screen flex flex-col justify-end items-center`}
      style={{ background: color }}
    >
      <ColorPannel chColor={chColor} />
    </div>
  );
}

export default Background;
