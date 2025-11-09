import { useState } from "react";
import turtleImg from "../../assets/turtle.png";
import "./GptApp.css";

function GptApp() {
  const [step, setStep] = useState(0);
  const [jump, setJump] = useState(false);

  const increaseStep = () => {
    if (step >= 4) return;

    setJump(true);
    setTimeout(() => setJump(false), 600); // remove jump class
    setStep(step + 1);
  };

  // horizontal + vertical targets (pixel offsets)
  const x = step * 120; 
  const y = step * -60;
  return (
    <div className="app">
      <div className="scene">

        <img
          src={turtleImg}
          alt="turtle"
          className={`turtle ${jump ? "jump" : ""}`}
          style={{ transform: `translate(${x}px, ${y}px)` }}
        />

        <div className="steps">
          <div className="step h1" />
          <div className="step h2" />
          <div className="step h3" />
          <div className="step h4" />
          <div className="step h5" />
        </div>

      </div>

      <button className="heart-btn" onClick={increaseStep}>❤️</button>
    </div>
  );
}

export default GptApp;
