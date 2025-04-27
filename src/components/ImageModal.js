import React from "react";
import "../styles/ImageModal.css";

const ImageModal = ({ show, onClose, imgSrc, alt }) => {
  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={imgSrc} alt={alt} className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal; 