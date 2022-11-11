const EditCardBtn = ({ setEditShowModal }) => {
  const handleModal = () => {
    setEditShowModal(true);
  };
  return (
    <div onClick={handleModal}>
      <button>Edit Card</button>
    </div>
  );
};

export default EditCardBtn;
