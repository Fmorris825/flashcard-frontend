const CardInfo = ({ displayCard }) => {
  return displayCard ? <p>{displayCard.word}</p> : null;
};

export default CardInfo;
