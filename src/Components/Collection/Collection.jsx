import "./Collection.css";

const Collection = ({ collection, setActiveCollection, activeCollection }) => {
  const handleClick = () => {
    setActiveCollection(collection.id);
  };

  const buttonClass =
    collection.id === activeCollection ? "active" : "inactive";

  return (
    <div id="collection" className={buttonClass} onClick={handleClick}>
      {collection.title}
    </div>
  );
};

export default Collection;
