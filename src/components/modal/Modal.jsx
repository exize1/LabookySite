import React, { useEffect, useState } from "react";
import './Modal.css';
import Confetti from "react-confetti";
import LabookyIcon from "../../assets/LabookyIcon.svg";

export default function Modal({
  isOpen,
  title = "Announcement",
  message,
  onClose,
  confirmText = "OK",
  onConfirm,
  isWin = false,
  showCloseButton = true,
}) {
  const CONFETTI_COLORS = ["#00fe20", "#fe8d1f", "#df9ddf", "#ffd700", "#ff4f81", "#00c8c7"];
  const CONFETTI_DURATION = 5;
  const CONFETTI_PIECES = 300;
	const [numberOfPieces, setNumberOfPieces] = useState(0);

  useEffect(() => {
    isWin && setNumberOfPieces(CONFETTI_PIECES);
		const timer = setTimeout(() => {
			isWin &&setNumberOfPieces(100);
		}, CONFETTI_DURATION * 1000);
		return () => clearTimeout(timer);
	}, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <Confetti
						numberOfPieces={numberOfPieces}
						colors={CONFETTI_COLORS}
      />
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">{title}
          {isWin && <img src={LabookyIcon} width={25} height={25} className="labooky-icon" />}

        </h2>
        <p className="modal-message">{message}
        </p>

        <div className="modal-actions">
          {onConfirm && (
            <button className="btn-primary" onClick={onConfirm}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
