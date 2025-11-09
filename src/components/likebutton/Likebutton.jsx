import likeIcon from '../../assets/likeIcon.png';
import './Likebutton.css';

function LikeButton({ increaseStep, blocked, icon, animationDisabled }) {

  return (
    <button className={`like-button ${animationDisabled ? 'disabled' : ''}`} onClick={increaseStep} disabled={blocked}>
        <img src={icon} className="like-icon" alt="logo" />
    </button>
  );
}

export default LikeButton;
