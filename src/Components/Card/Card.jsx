import React, { useState } from "react";

import "./Card.css";

const Card = ({ collections, cards, cardIndex, displayCard }) => {
  const numOfCards = cards.length;

  return (
    <div className="card">
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
  );
};

export default Card;
