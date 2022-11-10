import React, { useState } from "react";
import "./CollectionContainer.css";
import Collection from "../Collection/Collection";
import axios from "axios";
import { useEffect } from "react";

const CollectionContainer = ({ collections, setCollections, setCards }) => {
  const [activeCollection, setActiveCollection] = useState(1);

  useEffect(() => {
    getCardsforCollection();
  }, [activeCollection]);

  async function getCardsforCollection() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/`
    );
    setCards(response.data);
  }

  console.log(activeCollection);

  return (
    <div>
      {collections.map((collection) => {
        return (
          <Collection
            collection={collection}
            collections={collections}
            setActiveCollection={setActiveCollection}
            getCardsforCollection={getCardsforCollection}
          />
        );
      })}
    </div>
  );
};

export default CollectionContainer;
