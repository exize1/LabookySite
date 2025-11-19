import { useEffect, useRef, useState } from "react";
import './App.css';
import LikeButton from './components/likebutton/Likebutton';
import Step from './components/step/Step';
import GptApp from "./components/gptApp/GptApp";
import TurtleIcon from "./components/turtleIcon/TurtleIcon";
import likeIcon from './assets/likeIcon.png';
import restart from './assets/restart.png';
import logo from './assets/logo.png';
import Modal from "./components/modal/Modal";
import { ANNOUNCEMENTS } from "./consts/announcemenets";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [jump, setJump] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const turtleRef = useRef(null);
  const stepsRef = useRef([]);

  const increaseStep = () => {
    if (blocked || currentStep >= 4) return;

      setBlocked(true);        // block button
      setJump(true);           // trigger jump animation
      setCurrentStep(currentStep + 1);       // move turtle

      setTimeout(() => {
        setJump(false);        // remove jump class
        setBlocked(false);     // allow next click
      }, 300); // match animation speed
  };

  useEffect(() => {
    const turtle = turtleRef.current;
    const step = stepsRef.current[currentStep - 1];
    const game = document.querySelector(".main-content");
    if (currentStep === 0) {
      turtle.style.left = `2%`;
      turtle.style.bottom = `calc(-7% - 19px)`;
      return;
    }
    
    if (!turtle || !step || !game) return;

    const stepRect = step.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();

    const x = stepRect.left - gameRect.left + stepRect.width * 0.05;
    const y = gameRect.bottom - stepRect.top;

    turtle.style.left = `${x}px`;
    turtle.style.bottom = `${y - 20}px`;
    turtle.style.transition = `left 0.5s cubic-bezier(.22,1,.36,1), bottom 0.5s cubic-bezier(.22,1,.36,1)`;
    if (currentStep === 4) {
      setTimeout(() => {
        setShowModal(true);
      }, 300);
    }
  }, [currentStep]);
  
  return (
    <div className="App">
      <div className="App-backgroun">
        <div className="header">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
        <div className='body'>
          <div className="main-content">
            {/* <GptApp currentStep={step} /> */}
              <Modal
                isOpen={showModal}
                title={ANNOUNCEMENTS.REWARD.title}
                message={ANNOUNCEMENTS.REWARD.message}
                confirmText={ANNOUNCEMENTS.REWARD.confirmText}
                onConfirm={() => setShowModal(false)}
                onClose={() => setShowModal(false)}
                isWin={true}
              />
              <Modal
                isOpen={showStartModal}
                title={ANNOUNCEMENTS.WELCOME.title}
                message={ANNOUNCEMENTS.WELCOME.message}
                confirmText={ANNOUNCEMENTS.WELCOME.confirmText}
                onConfirm={() => setShowStartModal(false)}
                onClose={() => setShowStartModal(false)}
              />
            <div className='steps-container'>
                <TurtleIcon 
                  ref={turtleRef}
                  step={currentStep} 
                  jump={jump} 
                />
              <div className='steps'>
                <Step height={'height-1'} label={7} ref={(el) => (stepsRef.current[0] = el)}/>
                <Step height={'height-2'} label={8} ref={(el) => (stepsRef.current[1] = el)}/>
                <Step height={'height-3'} label={9} ref={(el) => (stepsRef.current[2] = el)}/>
                <Step height={'height-4'} label={10} ref={(el) => (stepsRef.current[3] = el)}/>
              </div>
            </div>
            <div className='buttons-container'>
              <div className='buttons'>
                <LikeButton 
                  increaseStep={increaseStep} 
                  blocked={blocked}
                  icon={likeIcon} 
                  height={7}/>
                <LikeButton 
                  animationDisabled={true}
                  increaseStep={() => setCurrentStep(0)}
                  icon={restart}
                  height={7} 
                />
            </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
