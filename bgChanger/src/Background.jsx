import React from "react";

function Background({ color }) {
  return (
    <div className={` h-screen`} style={{ background: color }}>
      <div>hello World</div>
    </div>
  );
}

export default Background;
