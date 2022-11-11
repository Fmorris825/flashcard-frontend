import React, { useState } from "react";
import "./EditModal.css";
import EditCardForm from "../EditCardForm/EditCardForm";

const EditModal = ({
  show,
  title,
  getCardsforCollection,
  setEditShowModal,
}) => {
  const handleModal = () => {
    setEditShowModal(false);
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
          <EditCardForm
            setEditShowModal={setEditShowModal}
            getCardsforCollection={getCardsforCollection}
          />
        </div>
      </div>
    </div>
  ) : null;
};
export default EditModal;
