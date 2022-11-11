const DeleteCardButton = ({ setDeleteShowModal }) => {
  const handleModal = () => {
    setDeleteShowModal(true);
  };
  return <div onClick={handleModal}>Delete Card</div>;
};

export default DeleteCardButton;
