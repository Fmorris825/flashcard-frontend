import React, { useState } from "react";

import "./Card.css";

const Card = ({ activeCollectionId, cards, activeCardId }) => {
  return (
    <div className="card">
      <div className="card_icons">
        <span>Edit Icon</span>
        <span>card num/10</span>
        <span>Delete Icon</span>
      </div>
      <div>card word</div>
    </div>
  );
};

export default Card;
