import { useState } from "react";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Home />
      <div
        style={{ height: "300vh", width: "100%", backgroundColor: "#ccc" }}
      ></div>
    </div>
  );
}

export default App;
