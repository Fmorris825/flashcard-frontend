import React, { useState } from "react";
import Card from "../Card/Card";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";

import "./CardViewer.css";

const CardViewer = ({ collections }) => {
  return (
    <div className="card_viewer">
      <div>
        <Card collections={collections} />
        <div className="card_btns">
          <PreviousBtn />
          <NextBtn />
        </div>
      </div>
    </div>
  );
};

export default CardViewer;
