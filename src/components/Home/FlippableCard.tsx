import "./flippable-card.css";
import Card from "./Card";
import { useState, useRef, forwardRef } from "react";
import { CSSTransition } from "react-transition-group";

interface IFlippableCardProps {
  item: number;
}

const FlippableCard = ({ item }: IFlippableCardProps) => {
  const [showFront, setShowFront] = useState(true);
  const ref = useRef(null);
  return (
    <div className="flippable-card-container">
      <CSSTransition
        in={showFront}
        timeout={300}
        classNames="flip"
        nodeRef={ref}
      >
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          bgImage={require(`../assets/${item}.jpg`)}
          cardRef={ref}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
