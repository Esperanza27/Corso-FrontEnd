import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/buttons/ButtonComponent";
import ImageComponent from "./components/images/ImageComponent";

function App() {
  const [count, setCount] = useState(0);
  const initialCounter = 0;

  return (
    <>
      <div>
        <h1>Cuore</h1>
        <ImageComponent
          srcImage="../src/assets/heart-3147976_640.jpg"
          altText="cuore"
        />
      </div>

      <div className="card">
        <ButtonComponent label="👍" score={initialCounter} />
      </div>
    </>
  );
}

export default App;
