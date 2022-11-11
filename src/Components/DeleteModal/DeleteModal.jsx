import React, { useState } from "react";
import "./DeleteModal.css";
import DeleteCardForm from "../DeleteCardForm/DeleteCardForm";

const DeleteModal = ({
  show,
  title,
  getCardsforCollection,
  setDeleteShowModal,
}) => {
  const handleModal = () => {
    setDeleteShowModal(false);
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
          <DeleteCardForm
            setDeleteShowModal={setDeleteShowModal}
            getCardsforCollection={getCardsforCollection}
          />
        </div>
      </div>
    </div>
  ) : null;
};
export default DeleteModal;
