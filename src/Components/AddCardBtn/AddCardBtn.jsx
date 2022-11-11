const AddCardButton = ({ setAddShowModal }) => {
  const handleModal = () => {
    setAddShowModal(true);
  };
  return <div onClick={handleModal}>Add Card</div>;
};

export default AddCardButton;
