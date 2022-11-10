import React, { useState } from "react";
import AddCollectionBtn from "../AddCollectionBtn/AddCollectionBtn";
import AddCardBtn from "../AddCardForm/AddCardForm";
import CardViewer from "../CardViewer/CardViewer";
import AddCardModal from "../AddCardModal/AddCardModal";
import AddCardForm from "../AddCardForm/AddCardForm";

import "./CardContainer.css";

const CardContainer = ({ activeCollectionId, cards, activeCardId }) => {
  return (
    <div className="card_container">
      <div className="add_btns">
        <AddCollectionBtn />

        {/* <AddCardModal title="Add Card">
            Add Card
            <AddCardForm />
          </AddCardModal> */}

        <CardViewer
          activeCollection={activeCollectionId}
          cards={cards}
          activeCardId={activeCardId}
        />
      </div>
    </div>
  );
};

export default CardContainer;
