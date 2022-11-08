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
        return <Collection collection={collection} />;
      })}
    </div>
  );
};

export default CollectionContainer;
