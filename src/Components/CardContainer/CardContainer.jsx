import React, { useState } from "react";
import AddCollectionBtn from "../AddCollectionBtn/AddCollectionBtn";
import AddCardBtn from "../AddCardForm/AddCardForm";
import CardViewer from "../CardViewer/CardViewer";
import AddCardModal from "../AddCardModal/AddCardModal";
import AddCardForm from "../AddCardForm/AddCardForm";

import "./CardContainer.css";

const CardContainer = ({ activeCollection, cards, getCardsforCollection }) => {
  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <div className="card_container">
      <div className="add_btns">
        <AddCollectionBtn />

        {/* <AddCardModal
          title="Add Card"
          getCardsforCollection={getCardsforCollection}
          cards={cards}
        >
          Add Card
          <AddCardForm
            getCardsforCollection={getCardsforCollection}
            cards={cards}
          />
        </AddCardModal> */}
      </div>

      <CardViewer
        activeCardId={activeCardId}
        cards={cards}
        setActiveCardId={setActiveCardId}
      />
    </div>
  );
};

export default CardContainer;
