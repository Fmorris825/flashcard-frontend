import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

import "./CardViewer.css";

const CardViewer = ({ collections, cards, getCardsforCollection }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipCard, setFlipCard] = useState(true);
  let [displayedCard, setDisplayedCard] = useState({});

  return (
    <div className="card_viewer">
      <div>
        <Card
          show={flipCard}
          setFlipCard={setFlipCard}
          collections={collections}
          cards={cards}
          setCardIndex={setCardIndex}
          cardIndex={cardIndex}
          getCardsforCollection={getCardsforCollection}
        />
        <div className="card_btns">
          <PreviousBtn
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            cards={cards}
          />
          <NextBtn
            cardIndex={cardIndex}
            setCardIndex={setCardIndex}
            cards={cards}
          />
        </div>
      </div>
    </div>
  );
};

export default CardViewer;
