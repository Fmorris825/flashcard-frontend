const CardId = ({ displayCard }) => {
  return displayCard ? <span>Card ID: {displayCard.id}</span> : null;
};

export default CardId;
