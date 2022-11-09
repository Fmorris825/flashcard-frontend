import React, { useState } from "react";
import Card from "../Card/Card";

const CardViewer = ({ activeCollectionId }) => {
  return (
    <div>
      <Card activeCollection={activeCollectionId} />
    </div>
  );
};

export default CardViewer;
