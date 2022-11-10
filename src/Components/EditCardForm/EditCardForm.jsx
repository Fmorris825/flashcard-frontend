import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const EditCardForm = ({ getCardsforCollection }) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [collection, setCollection] = useState(0);
  const [CardId, setCardId] = useState(0);

  async function editCard() {
    let editedCard = {
      word: word,
      definition: definition,
    };
    let response = await axios.put(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/${CardId}/`,
      editedCard
    );
    if (response.status === 200) {
      await getCardsforCollection();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editCard();
    setWord("");
    setDefinition("");
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
      <div className="input_group">
        <label>Word:</label>
        <input value={word} onChange={(event) => setWord(event.target.value)} />
      </div>
      <div className="input_group">
        <label>Definition:</label>
        <input
          value={definition}
          onChange={(event) => setDefinition(event.target.value)}
        />
      </div>
      <button type="submit">Edit Card</button>
    </form>
  );
};

export default EditCardForm;
