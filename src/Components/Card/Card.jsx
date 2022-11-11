import React, { useState } from "react";
import Modal from "../Modal/Modal";
import AddCardButton from "../AddCardBtn/AddCardBtn";
import DeleteCardButton from "./DeleteCardButton/DeleteCardButton";
import DeleteModal from "../DeleteModal/DeleteModal";

import "./Card.css";

const Card = ({
  setFlipCard,
  cards,
  cardIndex,
  show,
  getCardsforCollection,
}) => {
  const handleFlip = () => setFlipCard(false);
  const handleFlipBack = () => setFlipCard(true);
  const numOfCards = cards.length;
  const displayCard = cards[cardIndex];

  const [showAddModal, setAddShowModal] = useState(false);
  const [showDeleteModal, setDeleteShowModal] = useState(false);

  return show ? (
    <div className="card">
      <div className="card_icons">
        <AddCardButton setAddShowModal={setAddShowModal} />
        <Modal
          show={showAddModal}
          title={"Add Card"}
          setAddShowModal={setAddShowModal}
          getCardsforCollection={getCardsforCollection}
        />
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <span>{displayCard.id}</span>
        <span></span>
        <DeleteCardButton setDeleteShowModal={setDeleteShowModal} />
        <DeleteModal
          show={showDeleteModal}
          title={"Add Card"}
          setDeleteShowModal={setDeleteShowModal}
          getCardsforCollection={getCardsforCollection}
        />
      </div>
      <div onClick={handleFlip} className="card_info">
        <p>{displayCard.word}</p>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card_icons">
        <span>Edit Icon</span>
        <span>
          {cardIndex + 1}/{numOfCards}
        </span>
        <span>{displayCard.id}</span>
        <span></span>
        <span>Delete Icon</span>
      </div>
      <div onClick={handleFlipBack} className="card_info">
        <p>{displayCard.definition}</p>
      </div>
    </div>
  );
};

export default Card;
