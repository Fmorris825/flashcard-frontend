import React, { useState } from "react";

import "./Sidebar.css";
import CollectionContainer from "../CollectionContainer.jsx/CollectionContainer";
import Collection from "../Collection/Collection";

const Sidebar = ({
  collections,
  setActiveCollectionId,
  activeCollectionId,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <CollectionContainer
        collections={collections}
        setActiveCollectionId={setActiveCollectionId}
        activeCollection={activeCollectionId}
      />
    </div>
  );
};

export default Sidebar;
