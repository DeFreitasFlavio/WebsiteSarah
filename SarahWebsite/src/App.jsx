import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header/header";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <h1>test</h1>
    </div>
  );
}

export default App;
