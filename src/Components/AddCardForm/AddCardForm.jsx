import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const AddCardForm = ({ getCardsforCollection }) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function addCard() {
    let newCard = {
      word: word,
      definition: definition,
    };
    let response = await axios.post(
      `http://127.0.http://127.0.0.1:8000/api/collections/${1}/cards/.1:8000/api/music/`,
      newCard
    );
    if (response.status === 201) {
      await getCardsforCollection();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard();
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
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;
