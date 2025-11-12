import './Step.css';
import step from '../../assets/step.png'; 
function Step({ height, step }) {
  return (
    <div className={`step ${height}`}>
      {height !== 'height-0' &&
      <div className='step-container'>
        <div className='top-step'>
            <div className='top-texture-container'>
              <div className='inner-step-wrapper '>
                <div className='big left-side-color top-radius'></div>
                <div className='small left-side-color'></div>
              </div>
              <div className='inner-step-wrapper flex-end'>
                <div className='small right-side-color'></div>
                <div className='big right-side-color top-radius-right'></div>
              </div>
            </div>
          
        </div>
        <div className='bottom-step'>
          <div className='bottom-texture-container'>
            <div className='inner-step-wrapper '>
              <div className='medium left-side-color'></div>
              <div className='extra-small left-side-color'></div>
            </div>
            <div className='inner-step-wrapper '>
              <div className='small right-side-color'></div>
              <div className='big right-side-color'></div>
            </div>
          </div>
        </div>
      </div>
        // <img src={step} alt="step" className="step-image" />
      }
      <div className='step-number'>
        <p>{step}</p>
      </div>
    </div>
  );
}

export default Step;
