import React, { useState } from "react";

import "./Sidebar.css";
import CollectionContainer from "../CollectionContainer.jsx/CollectionContainer";
import Collection from "../Collection/Collection";

const Sidebar = ({
  collections,
  setActiveCollection,
  getCardsforCollection,
  setCollections,
  setCards,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <CollectionContainer
        collections={collections}
        setActiveCollection={setActiveCollection}
        getCardsforCollection={getCardsforCollection}
        setCollections={setCollections}
        setCards={setCards}
      />
    </div>
  );
};

export default Sidebar;
