import React, { useState } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

const CardViewer = ({ activeCollectionId, cards }) => {
  return (
    <div>
      <div>
        <Card activeCollection={activeCollectionId} cards={cards} />
      </div>
      <div>
        <PreviousBtn />
        <NextBtn />
      </div>
    </div>
  );
};

export default CardViewer;
