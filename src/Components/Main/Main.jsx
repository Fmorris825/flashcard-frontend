import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Sidebar.jsx/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

import "./Main.css";

const Main = () => {
  useEffect(() => {
    getAllCollections();
  }, []);

  useEffect(() => {
    getCardsForCollection();
  }, []);

  useEffect(() => {
    getActiveCard();
  }, []);

  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState([]);
  const [activeCollectionId, setActiveCollectionId] = useState(1);
  const [activeCardId, setActiveCardId] = useState(1);

  async function getAllCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCardsForCollection() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/`
    );
    setCards(response.data);
  }

  async function getActiveCard() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/${activeCardId}/`
    );
    setActiveCardId(response.data);
  }
  console.log(activeCardId.word);

  return (
    <div className="main_body">
      <span>
        <Sidebar
          collections={collections}
          setActiveCollectionId={setActiveCollectionId}
          activeCollection={activeCollectionId}
        />
      </span>
      <span className="card_container">
        <CardContainer
          activeCollection={activeCollectionId}
          cards={cards}
          activeCardId={activeCardId}
        />
      </span>
    </div>
  );
};

export default Main;
