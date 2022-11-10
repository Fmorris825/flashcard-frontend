import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const DeleteCardForm = ({ getCardsforCollection }) => {
  const [collection, setCollection] = useState(0);
  const [CardId, setCardId] = useState(0);

  async function deleteCard() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/${CardId}/`
    );
    if (response.status === 204) {
      await getCardsforCollection();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteCard();
    setCollection(0);
    setCardId("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input_group">
        <label>Collection:</label>
        <input
          value={collection}
          onChange={(event) => setCollection(event.target.value)}
        />
      </div>
      <div className="input_group">
        <label>Card Id:</label>
        <input
          value={CardId}
          onChange={(event) => setCardId(event.target.value)}
        />
      </div>
      <button type="submit">Delete Card</button>
    </form>
  );
};

export default DeleteCardForm;
