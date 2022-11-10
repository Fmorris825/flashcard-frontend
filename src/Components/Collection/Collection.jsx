import React, { useDebugValue, useState } from "react";
import axios from "axios";

const Collection = ({ collection, setActiveCollection }) => {
  const hanldeClick = () => {
    setActiveCollection(collection.id);
  };

  return <div onClick={hanldeClick}>{collection.title}</div>;
};

export default Collection;
