import React, { useState } from "react";
import "./CollectionContainer.css";
import Collection from "../Collection/Collection";
import axios from "axios";
import { useEffect } from "react";

const CollectionContainer = ({ collections, setActiveCollection }) => {
  return (
    <div>
      {collections.map((collection) => {
        return (
          <Collection
            collection={collection}
            collections={collections}
            setActiveCollection={setActiveCollection}
          />
        );
      })}
    </div>
  );
};

export default CollectionContainer;
