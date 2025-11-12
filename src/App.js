import { useState } from "react";
import './App.css';
import LikeButton from './components/likebutton/Likebutton';
import Step from './components/step/Step';
// import GptApp from "./components/gptApp/GptApp";
import TurtleIcon from "./components/turtleIcon/TurtleIcon";
import likeIcon from './assets/likeIcon.png';
import restart from './assets/restart.png';
import logo from './assets/logo.png';

function App() {
  const [step, setStep] = useState(0);
  const [jump, setJump] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const increaseStep = () => {
    if (blocked || step >= 4) return;

      setBlocked(true);        // block button
      setJump(true);           // trigger jump animation
      setStep(step + 1);       // move turtle

      setTimeout(() => {
        setJump(false);        // remove jump class
        setBlocked(false);     // allow next click
      }, 600); // match animation speed
  };

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
            <div className='steps-container'>
                <TurtleIcon 
                  step={step} 
                  jump={jump} 
                />
              <div className='steps'>
                <Step height={'height-1'} step={7} />
                <Step height={'height-2'} step={8} />
                <Step height={'height-3'} step={9} />
                <Step height={'height-4'} step={10} />
              </div>
            </div>
            <div className='buttons-container'>
              <div className='buttons'>
                <LikeButton 
                  increaseStep={increaseStep} 
                  blocked={blocked}
                  icon={likeIcon} 
                  height={20}/>
                <LikeButton 
                  animationDisabled={true}
                  increaseStep={() => setStep(0)}
                  icon={restart}
                  height={12} 
                />
            </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
      {/* <div className="App-header">
        <Step height={'height-2'} step={8}/>
      </div> */}
    </div>
    // <GptApp/>
  );
}

export default App;
