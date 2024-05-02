import { useState } from "react";
import Background from "./Background.jsx";

function App() {
  const [color, setColor] = useState("red");

  const chColor = (cl) => {
    setColor(cl);
    console.log(color);
  };

  return (
    <>
      <div>
        <Background color={color} />
        <button onClick={() => chColor("pink")}> red</button>
      </div>
    </>
  );
}

export default App;
