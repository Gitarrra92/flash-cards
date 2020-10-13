import React from "react";

import CardItem from "./CardItem";

import "./CardsList.css";

const CardsList = ({ cards }) => {
  return (
    <div className="cards-list">
      <ul className="cards-list__list">
        {cards.map((card) => {
          return <CardItem card={card} />;
        })}
      </ul>
    </div>
  );
};

export default CardsList;
