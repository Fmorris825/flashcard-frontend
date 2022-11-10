import React, { useState } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

import "./CardViewer.css";

const CardViewer = ({ collections, cards }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const displayCard = cards[cardIndex];
  return (
    <div className="card_viewer">
      <div>
        <Card
          collections={collections}
          displayCard={displayCard}
          cards={cards}
          setCardIndex={setCardIndex}
          cardIndex={cardIndex}
        />
        <div className="card_btns">
          <PreviousBtn cardIndex={cardIndex} />
          <NextBtn cardIndex={cardIndex} />
        </div>
      </div>
    </div>
  );
};

export default CardViewer;
