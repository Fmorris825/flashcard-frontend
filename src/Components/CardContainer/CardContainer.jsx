import React, { useState } from "react";

const CardContainer = () => {
  return (
    <div className="collection_container">
      <div className="btn_container">
        <div>
          <button className="btn">Add Collection</button>
        </div>
        <div>
          <button className="btn">Add Card</button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
