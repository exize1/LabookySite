import React, { useState, useRef, useEffect } from "react";
import "./GptApp.css";

export default function TurtleJump() {
  const [currentStep, setCurrentStep] = useState(0);
  const turtleRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    if (currentStep === 0) return;

    const turtle = turtleRef.current;
    const step = stepsRef.current[currentStep - 1];
    const game = document.querySelector(".game-container");

    if (!turtle || !step || !game) return;

    const stepRect = step.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();

    const x = stepRect.left - gameRect.left + stepRect.width * 0.2;
    const y = gameRect.bottom - stepRect.top;

    turtle.style.left = `${x}px`;
    turtle.style.bottom = `${y - 20}px`;
  }, [currentStep]);

  const jump = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="game-container">
      <div className="turtle" ref={turtleRef}></div>

      <div className="steps">
        {[12, 18, 24, 32].map((height, i) => (
          <div
            key={i}
            className="step"
            style={{ height: `${height}vh` }}
            ref={(el) => (stepsRef.current[i] = el)}
          ></div>
        ))}
      </div>

      <button className="jump-btn" onClick={jump}>JUMP</button>
    </div>
  );
}
