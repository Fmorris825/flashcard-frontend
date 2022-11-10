import React, { useState } from "react";

import "./Card.css";

const Card = ({ setFlipCard, cards, cardIndex, displayCard, show }) => {
  const handleFlip = () => setFlipCard(false);
  const handleFlipBack = () => setFlipCard(true);
  const numOfCards = cards.length;

  return show ? (
    <div className="card" onClick={handleFlip}>
      <div className="card_icons">
        <span>Edit Icon</span>
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <span>{displayCard.id}</span>
        <span></span>
        <span>Delete Icon</span>
      </div>
      <div className="card_info">{displayCard.word}</div>
    </div>
  ) : (
    <div className="card" onClick={handleFlipBack}>
      <div className="card_icons">
        <span>Edit Icon</span>
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <span>{displayCard.id}</span>
        <span></span>
        <span>Delete Icon</span>
      </div>
      <div className="card_info">{displayCard.definition}</div>
    </div>
  );
};

export default Card;
