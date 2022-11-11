const CardInfoBack = ({ displayCard }) => {
  return displayCard ? <span>{displayCard.definition}</span> : null;
};

export default CardInfoBack;
