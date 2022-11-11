import { useState } from "react";
import axios from "axios";
import "./AddCardForm.css";

const AddCardForm = ({
  getCardsforCollection,
  setAddShowModal,
  activeCollection,
}) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function addCard() {
    let newCard = {
      word: word,
      definition: definition,
    };
    let response = await axios.post(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/`,
      newCard
    );
    if (response.status === 201) {
      await getCardsforCollection();
    }
  }

  const handleModal = () => {
    setAddShowModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addCard();
    setWord("");
    setDefinition("");
    handleModal();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <div className="input_group">
        <label>Collection:</label>
        <input
          value={collection}
          onChange={(event) => setCollection(event.target.value)}
        />
      </div> */}
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
