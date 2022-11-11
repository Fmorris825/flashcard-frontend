import React, { useState } from "react";
import AddCollectionBtn from "../AddCardBtn/AddCardBtn";
import AddCardBtn from "../AddCardForm/AddCardForm";
import CardViewer from "../CardViewer/CardViewer";
import AddCardForm from "../AddCardForm/AddCardForm";
import EditCardForm from "../EditCardForm/EditCardForm";
import DeleteCardForm from "../DeleteCardForm/DeleteCardForm";

import "./CardContainer.css";

const CardContainer = ({ activeCollection, cards, getCardsforCollection }) => {
  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <div className="card_container">
      <div className="add_btns">
        <EditCardForm
          cards={cards}
          getCardsforCollection={getCardsforCollection}
        />
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
        getCardsforCollection={getCardsforCollection}
      />
    </div>
  );
};

export default CardContainer;
