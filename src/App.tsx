import "./App.css";
import { useEffect, useState } from "react";
import Canvascomponent from "./wrappers/CanvasComponent";
import { shuffleArray } from "./functions";
import { Model } from "./models/Model";

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

  const handlePrev = () => {
    if (!currentIndex || currentIndex < 1) return
    setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex >= numberOfAliens - 1) return
    setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <button className="left" onClick={handlePrev}>Prev</button>
      <div className="canvas-container">
        <Canvascomponent>
          <Model num={nums[currentIndex]} />
        </Canvascomponent>
      </div>
      <button className="right" onClick={handleNext}>Next</button>
    </>
  );
}

export default App;