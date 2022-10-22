import React from "react";
import "./card.css";
export const Card = () => {
  return (
    <div className="card">
      <div className="card__face card__face--front">
        <img src="https://picsum.photos/200/300" alt="card" />
      </div>
      <div className="card__face card__face--back">
        <img src="https://picsum.photos/200/300" alt="card" />
      </div>
    </div>
  );
};
