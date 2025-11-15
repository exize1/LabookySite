import './TurtleIcon.css';
import turtle from '../../assets/turtle.png';
import React from 'react';

const TurtleIcon =  React.forwardRef(({ step, jump }, ref) => {

  // const x = step * 10; 
  // const y = step * -7;
  
  return (
    <div 
      ref={ref}
      className='turtle-wrapper'
      // style={{ transform: `translate(${x}vmax, ${y}vmax)` }}
    >
        <img 
          src={turtle} 
          className={`turtle-icon ${jump ? "jump" : ""}`}
          alt="logo" 
      />
    </div>
  );
})

export default TurtleIcon;
