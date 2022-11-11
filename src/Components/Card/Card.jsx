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
  useEffect(() => {
    getCardsforCollection();
  }, []);

  const handleFlip = () => setFlipCard(false);
  const handleFlipBack = () => setFlipCard(true);

  const numOfCards = cards.length;

  const displayCard = cards[cardIndex];

  const [showAddModal, setAddShowModal] = useState(false);
  const [showDeleteModal, setDeleteShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);

  return show ? (
    <div className="card">
      <div className="card_icons">
        <span>
          <AddCardBtn setAddShowModal={setAddShowModal} />
          <Modal
            show={showAddModal}
            title={"Add Card"}
            setAddShowModal={setAddShowModal}
            getCardsforCollection={getCardsforCollection}
          />
          <EditCardBtn setEditShowModal={setEditShowModal} />
          <EditModal
            show={showEditModal}
            title={"Edit Card"}
            setEditShowModal={setEditShowModal}
            getCardsforCollection={getCardsforCollection}
          />
          <DeleteCardBtn setDeleteShowModal={setDeleteShowModal} />
          <DeleteModal
            show={showDeleteModal}
            title={"Delete Card"}
            setDeleteShowModal={setDeleteShowModal}
            getCardsforCollection={getCardsforCollection}
          />
        </span>
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
