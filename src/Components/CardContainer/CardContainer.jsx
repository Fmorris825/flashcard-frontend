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
      <CardViewer
        activeCardId={activeCardId}
        cards={cards}
        setActiveCardId={setActiveCardId}
        getCardsforCollection={getCardsforCollection}
        activeCollection={activeCollection}
      />
    </div>
  );
};

export default CardContainer;
