const PreviousBtn = ({ cardIndex, setCardIndex, cards }) => {
  const handleClick = () => {
    if (cardIndex === 0) {
      setCardIndex(cards.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };
  return <button onClick={handleClick}>Previous</button>;
};

export default PreviousBtn;
