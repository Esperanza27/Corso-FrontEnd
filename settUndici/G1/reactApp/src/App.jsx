import { useState } from "react";
import "./App.css";
import ButtonComponent from "./components/buttons/ButtonComponent";
import ImageComponent from "./components/images/ImageComponent";

function App() {
  const initialCounter = 0;
  return (
    <>
      <div>
        <h1>Esercizio</h1>
        <ImageComponent
          srcImage="../src/assets/heart-3147976_640.jpg"
          altText="cuore"
        />
      </div>

      <div className="card">
        <ButtonComponent label="👍" score={initialCounter} bgColor = "gray" />
      </div>
    </>
  );
}

export default App;
