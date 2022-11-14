import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const EditCardForm = ({
  getCardsforCollection,
  displayCard,
  activeCollection,
}) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function editCard() {
    let editedCard = {
      word: word,
      definition: definition,
    };
    let response = await axios.put(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/${displayCard.id}/`,
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
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
