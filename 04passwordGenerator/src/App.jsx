import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {};

  return (
    <>
      <h1 className="text-center text-4xl text-white ">Password Generator</h1>
    </>
  );
}

export default App;
