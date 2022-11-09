import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Sidebar.jsx/Sidebar";
import CollectionContainer from "../CollectionContainer.jsx/CollectionContainer";
import CardContainer from "../CardContainer/CardContainer";

import "./Main.css";

const Main = () => {
  useEffect(() => {
    getAllCollections();
  }, []);

  const [collections, setCollections] = useState([]);
  const [card, setCard] = useState([]);
  const [activeCollectionId, setActiveCollectionId] = useState(0);
  const [activeCard, setActiveCard] = useState([]);

  async function getAllCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }
  // console.log(collections);
  console.log(activeCollectionId);
  // console.log(activeCollection.title);

  return (
    <div className="main_body">
      <span>
        <Sidebar
          collections={collections}
          setActiveCollectionId={setActiveCollectionId}
          activeCollection={activeCollectionId}
        />
      </span>
      <span>
        <CardContainer />
      </span>
    </div>
  );
};

export default Main;
