import './TurtleIcon.css';
import turtle from '../../assets/turtle.png';

function TurtleIcon({ step, jump }) {

  const x = step * 130; 
  const y = step * -40;

  return (
    <div className='turtle-wrapper'
      style={{ transform: `translate(${x}%, ${y}%)` }}
    >
        <img 
          src={turtle} 
          className={`turtle-icon ${jump ? "jump" : ""}`}
          alt="logo" 
      />
    </div>
  );
}

export default TurtleIcon;
