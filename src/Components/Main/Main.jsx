import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Sidebar.jsx/Sidebar";

const Main = () => {
  useEffect(() => {
    getAllCollections();
  }, []);

  const [collections, setCollections] = useState([]);
  const [card, setCard] = useState([]);

  async function getAllCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }
  console.log(collections);

  return (
    <div>
      <Sidebar collections={collections} />
    </div>
  );
};

export default Main;
