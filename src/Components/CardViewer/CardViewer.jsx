import React, { useState } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

import "./CardViewer.css";

const CardViewer = ({ activeCollectionId, cards, activeCardId }) => {
  return (
    <div className="card">
      <div>
        <Card
          activeCollection={activeCollectionId}
          cards={cards}
          activeCardId={activeCardId}
        />
      </div>
      <div>
        <PreviousBtn />
        <NextBtn />
      </div>
    </div>
  );
};

export default CardViewer;
