import "./flippable-card.css";
import Card from "./Card";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

interface IFlippableCardProps {
  item: number;
}

// Time to flip the card in milliseconds
const timeToFlip = 5 * 1000;

const FlippableCard = ({ item }: IFlippableCardProps) => {
  const [showFront, setShowFront] = useState(true);

  const ref = useRef(null);

  // Flip the card after 5 seconds`
  useEffect(() => {
    setTimeout(() => {
      setShowFront(false);
    }, timeToFlip);
  }, []);

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
