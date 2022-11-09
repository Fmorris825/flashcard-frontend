import React, { useState } from "react";
import AddCollectionBtn from "../AddCollectionBtn/AddCollectionBtn";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import CardViewer from "../CardViewer/CardViewer";

import "./CardContainer.css";

const CardContainer = ({ activeCollectionId, cards, activeCardId }) => {
  return (
    <div className="card_container">
      <div className="add_btns">
        <div>
          <AddCollectionBtn />
        </div>
        <div>
          <AddCardBtn />
        </div>
      </div>
      <div className="card_viewer">
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
