import React, { useState } from "react";

import "./Sidebar.css";
import CollectionContainer from "../CollectionContainer.jsx/CollectionContainer";
import Collection from "../Collection/Collection";

const Sidebar = ({ collections, setActiveCollection, activeCollection }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <h1 className="sidebar_h1">Collections</h1>
      <CollectionContainer
        collections={collections}
        setActiveCollection={setActiveCollection}
        activeCollection={activeCollection}
      />
    </div>
  );
};

export default Sidebar;
