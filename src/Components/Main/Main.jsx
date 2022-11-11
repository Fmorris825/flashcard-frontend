import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Sidebar.jsx/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

import "./Main.css";

const Main = () => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState(1);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCollections();
  }, []);

  useEffect(() => {
    getCardsforCollection();
  }, [activeCollection]);

  async function getAllCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCardsforCollection() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeCollection}/cards/`
    );
    setCards(response.data);
  }

  // async function getActiveCard() {
  //   const response = await axios.get(
  //     `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${activeCardId}/`
  //   );
  //   setActiveCardId(response.data);
  // }
  return (
    <div className="main_body">
      <Sidebar
        collections={collections}
        setCollections={setCollections}
        setCards={setCards}
        setActiveCollection={setActiveCollection}
      />
      <CardContainer
        cards={cards}
        activeCollection={activeCollection}
        getCardsforCollection={getCardsforCollection}
      />
    </div>
  );
};

export default Main;
