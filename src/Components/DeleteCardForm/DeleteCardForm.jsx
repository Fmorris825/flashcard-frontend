import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const DeleteCardForm = ({
  getCardsforCollection,
  setDeleteShowModal,
  activeCollection,
  displayCard,
}) => {
  const [validationAnswer, setValidationAnswer] = useState("");

  async function deleteCard() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/${displayCard.id}/`
    );
    if (response.status === 204) {
      await getCardsforCollection();
    }
  }

  const handleModal = () => {
    setDeleteShowModal(false);
  };

  const handleSubmit = (event) => {
    setValidationAnswer(event);
    if (event === "yes") {
      deleteCard();
      handleModal();
    } else if (event === "no") {
      handleModal();
    }
  };

  return (
    <div className="form" onSubmit={handleSubmit}>
      <div className="input_group">
        <div>Are you sure you want to delete this card?</div>
        <label>Collection:</label>
        <button
          value={"yes"}
          onClick={(event) => handleSubmit(event.target.value)}
        >
          Yes
        </button>
      </div>
      <div className="input_group">
        <label>Card Id:</label>
        <button
          value={"no"}
          onClick={(event) => handleSubmit(event.target.value)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteCardForm;
