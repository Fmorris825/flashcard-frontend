const DeleteCardBtn = ({ setDeleteShowModal }) => {
  const handleModal = () => {
    setDeleteShowModal(true);
  };
  return (
    <div onClick={handleModal}>
      <button>Delete Card</button>
    </div>
  );
};

export default DeleteCardBtn;
