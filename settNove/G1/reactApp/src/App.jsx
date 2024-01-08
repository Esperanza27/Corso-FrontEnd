import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/buttons/ButtonComponent";
import ImageComponent from "./components/image/ImageComponent";

function App() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ButtonComponent label="CLICK" />
      </div>
    </>
  );
}

export default App;
