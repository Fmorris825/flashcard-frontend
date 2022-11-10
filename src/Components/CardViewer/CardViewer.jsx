import React, { useState } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

import "./CardViewer.css";

const CardViewer = ({ collections }) => {
  return (
    <div className="card_viewer">
      <div className="card">
        <div>
          <Card collections={collections} />
        </div>
        <div>
          <PreviousBtn />
          <NextBtn />
        </div>
      </div>
    </div>
  );
};

export default CardViewer;
