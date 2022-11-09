import React, { useState } from "react";
import AddCollectionBtn from "../../AddCollectionBtn/AddCollectionBtn";
import AddCardBtn from "../../AddCardBtn/AddCardBtn";
import CardViewer from "../CardViewer/CardViewer";

const CardContainer = ({ activeCollectionId }) => {
  return (
    <div className="collection_container">
      <AddCollectionBtn />
      <AddCardBtn />
      <CardViewer activeCollection={activeCollectionId} />
    </div>
  );
};

export default CardContainer;
