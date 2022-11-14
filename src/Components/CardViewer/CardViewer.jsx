import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";
import CardId from "../CardId/CardId";

import "./CardViewer.css";

const CardViewer = ({
  collections,
  cards,
  getCardsforCollection,
  activeCollection,
}) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipCard, setFlipCard] = useState(true);

  const numOfCards = cards.length;

  const displayCard = cards[cardIndex];

  return (
    <div className="card_viewer">
      <div>
        <span className="card_stats">
          <h2>
            Card {cardIndex + 1}/{numOfCards}
          </h2>
        </span>
        <Card
          show={flipCard}
          setFlipCard={setFlipCard}
          collections={collections}
          cards={cards}
          setCardIndex={setCardIndex}
          cardIndex={cardIndex}
          getCardsforCollection={getCardsforCollection}
          numOfCards={numOfCards}
          displayCard={displayCard}
          activeCollection={activeCollection}
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
