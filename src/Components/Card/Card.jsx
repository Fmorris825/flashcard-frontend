import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import AddCardButton from "../AddCardBtn/AddCardBtn";
import DeleteCardButton from "./DeleteCardButton/DeleteCardButton";
import DeleteModal from "../DeleteModal/DeleteModal";
import CardInfo from "../CardInfo/CardInfo";
import CardInfoBack from "../CardInfoBack/CardInfoBack";
import CardId from "../CardId/CardId";

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
  const [showdisplayCard, setShowdisplayCard] = useState(false);

  return show ? (
    <div className="card">
      <div className="card_icons">
        <span>
          <AddCardButton setAddShowModal={setAddShowModal} />
          <Modal
            show={showAddModal}
            title={"Add Card"}
            setAddShowModal={setAddShowModal}
            getCardsforCollection={getCardsforCollection}
          />
          <DeleteCardButton setDeleteShowModal={setDeleteShowModal} />
          <DeleteModal
            show={showDeleteModal}
            title={"Add Card"}
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
