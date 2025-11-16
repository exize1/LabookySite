import React, { useEffect } from "react";
import './Modal.css';

export default function Modal({
  isOpen,
  title = "Announcement",
  message,
  onClose,
  confirmText = "OK",
  onConfirm,
  showCloseButton = true,
}) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>

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
