import React from "react";

import "./CardItem.css";

const CardItem = ({ card }) => {
  return (
    <li className="card-item">
      <div className="card-item__checkbox">
        <input type="checkbox" />
      </div>
      <div className="card-item__title">
        <h2>{card.translation}</h2>
      </div>
    </li>
  );
};

export default CardItem;
