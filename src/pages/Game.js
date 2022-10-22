import React from "react";
import { Card } from "../component/Card";

export const Game = () => {
  const [cards, setCards] = React.useState([]);
  return (
    <div className="">
      <header>
        <h3>Memory Game</h3>
      </header>
      <div className="container">
        <Card
        // key={index}
        // card={card}
        // index={index}
        // onClick={handleCardClick}
        />
      </div>
    </div>
  );
};
