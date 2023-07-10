import "./flippable-card.css";
import Card from "./Card";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

interface IFlippableCardProps {
  item: number;
}

const FlippableCard = ({ item }: IFlippableCardProps) => {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          bgImage={require(`../assets/${item}.jpg`)}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
