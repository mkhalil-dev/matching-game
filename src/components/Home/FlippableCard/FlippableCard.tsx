import "./flippable-card.css";
import Card from "../Card/Card";
import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ICard, ISelectedCard } from "../Game";
import { ICardClickProps } from "../hooks/useCardClick";

interface IFlippableCardProps {
  selectedCards: ISelectedCard[];
  card: ICard;
  handleClick: ({ card }: ICardClickProps) => void;
}

const FlippableCard = ({
  selectedCards,
  card,
  handleClick,
}: IFlippableCardProps) => {
  const ref = useRef(null);

  return (
    <div className="flippable-card-container">
      <CSSTransition
        in={card.isFlipped}
        timeout={300}
        classNames="flip"
        nodeRef={ref}
      >
        <Card
          onClick={() => handleClick({ card })}
          bgImage={require(`../../assets/${card.value}.jpg`)}
          cardRef={ref}
          disabled={selectedCards.length === 2}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
