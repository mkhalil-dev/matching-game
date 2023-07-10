import "./flippable-card.css";
import Card from "./Card";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const FlippableCard = () => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
