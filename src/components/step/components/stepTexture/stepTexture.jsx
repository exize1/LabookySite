import './stepTexture.css';
function stepTexture({ height, stepTexture }) {
  return (
    <div className={`stepTexture ${height}`}>
      {height !== 'height-0' &&
      <>
        <div className='top-stepTexture'>
          <div className='inner-stepTexture-wrapper '>
            <div className='big left-side-color top-radius'></div>
            <div className='small left-side-color'></div>
          </div>
        </div>
        <div className='bottom-stepTexture-container'>
          <div className='bottom-stepTexture'>
            <div className='inner-stepTexture-wrapper '>
              <div className='big left-side-color'></div>
              <div className='small left-side-color'></div>
              <div className='big right-side-color'></div>
              <div className='small right-side-color'></div>
            </div>

          </div>
        </div>
      </>
        // <img src={stepTexture} alt="stepTexture" className="stepTexture-image" />
      }
      <p>{stepTexture}</p>
    </div>
  );
}

export default stepTexture;
