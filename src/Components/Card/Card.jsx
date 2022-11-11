import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import DeleteCardBtn from "../DeleteCardBtn/DeleteCardBtn";
import DeleteModal from "../DeleteModal/DeleteModal";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoBack from "../CardInfoBack/CardInfoBack";
import CardId from "../CardId/CardId";
import EditCardBtn from "../EditCardBtn/EditCardBtn";
import EditModal from "../EditModal/EditModal";

import "./Card.css";

const Card = ({
  setFlipCard,
  cards,
  cardIndex,
  show,
  getCardsforCollection,
}) => {
  const [showAddModal, setAddShowModal] = useState(false);
  const [showDeleteModal, setDeleteShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);
  useEffect(() => {
    getCardsforCollection();
  }, []);

  const handleFlip = () => setFlipCard(false);
  const handleFlipBack = () => setFlipCard(true);

  const numOfCards = cards.length;

  const displayCard = cards[cardIndex];

  if (!displayCard) return null;
  return show ? (
    <div className="card">
      <div className="card_icons">
        <AddCardBtn setAddShowModal={setAddShowModal} />
        <Modal
          className="modal"
          show={showAddModal}
          title={"Add Card"}
          setAddShowModal={setAddShowModal}
          getCardsforCollection={getCardsforCollection}
        />
        <EditCardBtn setEditShowModal={setEditShowModal} />
        <EditModal
          className="modal"
          show={showEditModal}
          title={"Edit Card"}
          setEditShowModal={setEditShowModal}
          getCardsforCollection={getCardsforCollection}
        />
        <DeleteCardBtn setDeleteShowModal={setDeleteShowModal} />
        <DeleteModal
          className="modal"
          show={showDeleteModal}
          title={"Delete Card"}
          setDeleteShowModal={setDeleteShowModal}
          getCardsforCollection={getCardsforCollection}
        />
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <CardId displayCard={displayCard} />

        <span></span>
      </div>
      <div onClick={handleFlip} className="card_info">
        <CardInfo displayCard={displayCard} />
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card_icons">
        <span>Edit Icon</span>
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <CardId displayCard={displayCard} />
        <span></span>
        <span>Delete Icon</span>
      </div>
      <div onClick={handleFlipBack} className="card_info">
        <CardInfoBack displayCard={displayCard} />
      </div>
    </div>
  );
};

export default Card;
