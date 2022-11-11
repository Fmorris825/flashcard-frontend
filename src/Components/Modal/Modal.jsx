import React, { useState } from "react";
import "./Modal.css";
import AddCardForm from "../AddCardForm/AddCardForm";

const Modal = ({ show, title, getCardsforCollection, setAddShowModal }) => {
  const handleModal = () => {
    setAddShowModal(false);
  };
  return show ? (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="modal-close-btn" onClick={handleModal}>
            x
          </span>
        </div>
        <div className="modal-body">
          <AddCardForm
            setAddShowModal={setAddShowModal}
            getCardsforCollection={getCardsforCollection}
          />
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
