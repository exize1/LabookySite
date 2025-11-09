import './Step.css';
import step from '../../assets/step.png'; 
function Step({ height, step }) {
  return (
    <div className={`step ${height}`}>
      {height !== 'height-0' &&
      <>
        <div className='top-step'>
          <div className='step-inner-wrapper '>
            <div className='step-inner-top right'></div>
            <div className='left'></div>
          </div>
        </div>
        <div className='bottom-step-container'>
          <div className='bottom-step'>
            <div className='step-inner-wrapper '>
              <div className='right'></div>
              <div className='left'></div>
            </div>
            {/* <div className='step-inner-border left'>
              
            </div> */}
          </div>
        </div>
      </>
        // <img src={step} alt="step" className="step-image" />
      }
      <p>{step}</p>
    </div>
  );
}

export default Step;
