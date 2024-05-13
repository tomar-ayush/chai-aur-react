import React from "react";

function ColorPannel({ chColor }) {
  return (
    <div className="flex gap-4 border px-4 py-1 rounded-xl bg-white mb-2">
      <button
        onClick={() => chColor("red")}
        className="border bg-red-600 px-4 py-2 rounded-2xl "
      >
        red
      </button>
      <button
        onClick={() => chColor("green")}
        className="border bg-green-600 px-4 py-2 rounded-2xl "
      >
        green
      </button>
      <button
        onClick={() => chColor("blue")}
        className="border bg-blue-600 px-4 py-2 rounded-2xl "
      >
        Blue
      </button>
      <button
        onClick={() => chColor("olive")}
        className="border bg-olive-600 px-4 py-2 rounded-2xl "
      >
        Olive
      </button>
      <button
        onClick={() => chColor("yellow")}
        className="border bg-yellow-400 px-4 py-2 rounded-2xl "
      >
        Yellow
      </button>
      <button
        onClick={() => chColor("pink")}
        className="border bg-pink-400 px-4 py-2 rounded-2xl "
      >
        Pink
      </button>
    </div>
  );
}

export default ColorPannel;
