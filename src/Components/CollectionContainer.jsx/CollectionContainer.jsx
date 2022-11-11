import React, { useState } from "react";
import "./CollectionContainer.css";
import Collection from "../Collection/Collection";
import axios from "axios";
import { useEffect } from "react";

const CollectionContainer = ({
  collections,
  setActiveCollection,
  activeCollection,
}) => {
  return (
    <div>
      {collections.map((collection, index) => {
        return (
          <h2>
            <Collection
              key={collection.id}
              index={index + 1}
              collection={collection}
              collections={collections}
              setActiveCollection={setActiveCollection}
              activeCollection={activeCollection}
            />
          </h2>
        );
      })}
    </div>
  );
};

export default CollectionContainer;
