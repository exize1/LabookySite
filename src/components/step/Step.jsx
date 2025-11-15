import React from 'react';
import './Step.css';

const Step = React.forwardRef(({ height, label, style }, ref) => {
  return (
    <div className={`step ${height}`} style={style} ref={ref}>
      {height !== 'height-0' &&
        <div className='step-container'>
          
          <div className='top-step'>
            <div className='top-texture-container'>
              
              <div className='inner-step-wrapper'>
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
              <div className='inner-step-wrapper'>
                <div className='medium left-side-color'></div>
                <div className='extra-small left-side-color'></div>
              </div>

              <div className='inner-step-wrapper flex-end'>
                <div className='small right-side-color'></div>
                <div className='big right-side-color'></div>
              </div>
            </div>
          </div>

        </div>
      }

      <div className='step-number'>
        <p>{label}</p>
      </div>
    </div>
  );
})

export default Step;
