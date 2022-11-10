import { useState } from "react";
import axios from "axios";

const AddCardForm = () => {
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
    // if (response.status === 201) {
    //   await getallcards();
    // }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard();
  };

  return (
    <form>
      {" "}
      onSubmit={handleSubmit}
      <input
        label="Word"
        name="word"
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />
      <input
        label="Definition"
        name="definition"
        value={definition}
        onChange={(event) => setDefinition(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddCardForm;
