const NextBtn = ({ cardIndex, setCardIndex, cards }) => {
  const handleClick = () => {
    const newIndex = cardIndex + 1;
    console.log(cardIndex);
    console.log(newIndex);
    if (newIndex === cards.length) {
      setCardIndex(0);
    } else {
      setCardIndex(newIndex);
    }
  };
  return <button onClick={handleClick}>Next</button>;
};

export default NextBtn;
