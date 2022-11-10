import React, { useState } from "react";
import "./AddCardModal.css";

const AddCardModal = ({ title, onClose, children, getCardsforCollection }) => {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close-btn">x</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
export default AddCardModal;
