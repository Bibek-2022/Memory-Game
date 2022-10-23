import React from "react";
import "./card.css";
export const Card = () => {
  const [flip, setFlip] = React.useState(false);
  // "this.classList.toggle('flipped');"

  const handleOnClick = () => {
    setFlip(!flip);
    console.log(flip);
  };
  return (
    <div class="flipCard">
      <div class={flip ? "card flipped" : "card"} onClick={handleOnClick}>
        <div class="side front">Keyword</div>
        <div class="side back">
          Definition
          <br />
          Explanation
        </div>
      </div>
    </div>
  );
};
