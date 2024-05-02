import React from "react";
import { Route, Routes } from "react-router-dom";

const HelloWorld = () => <div>Hello worlds</div>;
const Hey = () => <div>hey</div>;

function App() {
  return (
    <div className="container">
      <nav>
        <div>Home</div>
        <div>Menu</div>
        <div>Contact</div>
      </nav>
      <main>
        <h2>Got Questions? </h2>
      </main>
    </div>
  );
}

export default App;
