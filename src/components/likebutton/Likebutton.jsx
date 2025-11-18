import likeIcon from '../../assets/likeIcon.png';
import './Likebutton.css';

function LikeButton({ increaseStep, blocked, icon, animationDisabled, height=20 }) {

  return (
    <button className={`like-button ${animationDisabled ? 'disabled' : ''}`} onClick={increaseStep} disabled={blocked}>
        <img src={icon} className="like-icon" alt="logo" style={{ height: `${height}vh` }} />
    </button>
  );
}

export default LikeButton;
