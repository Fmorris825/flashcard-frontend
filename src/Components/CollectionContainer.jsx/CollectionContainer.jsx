import React, { useState } from "react";
import "./CollectionContainer.css";
import Collection from "../Collection/Collection";

const CollectionContainer = ({
  collections,
  setActiveCollectionId,
  activeCollectionId,
}) => {
  return (
    <div>
      {collections.map((collection) => {
        return (
          <Collection
            collection={collection}
            setActiveCollectionId={setActiveCollectionId}
            activeCollection={activeCollectionId}
          />
        );
      })}
    </div>
  );
};

export default CollectionContainer;
