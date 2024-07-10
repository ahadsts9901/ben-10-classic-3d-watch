import "./App.css";
import { useEffect, useState } from "react";
import Canvascomponent from "./wrappers/CanvasComponent";
import { shuffleArray } from "./functions";

function App() {

  const numberOfAliens = 10

  const [nums, setNums] = useState<any>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {

    let numsArray = [];

    for (let i = 1; i <= numberOfAliens; i++) {
      numsArray.push(i.toString().padStart(2, '0'));
    }

    numsArray = shuffleArray(numsArray);

    setNums(numsArray);

  }, []);

  const 

  return (
    <>
      <button onClick={handlePrev}>Prev</button>
      <div className="canvas-container"></div>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default App;