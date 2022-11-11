const AddCardBtn = ({ setAddShowModal }) => {
  const handleModal = () => {
    setAddShowModal(true);
  };
  return (
    <div onClick={handleModal}>
      <button>Add Card</button>
    </div>
  );
};

export default AddCardBtn;
