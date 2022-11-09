import React, { useState } from "react";

const Collection = ({
  collection,
  setActiveCollectionId,
  activeCollectionId,
}) => {
  const handleClick = (id) => {
    let activeCollectionId = id;
    setActiveCollectionId(activeCollectionId);
  };
  return (
    <div onClick={() => handleClick(collection.id)} value={collection.id}>
      {collection.title}
    </div>
  );
};

export default Collection;
