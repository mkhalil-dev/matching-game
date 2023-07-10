import "./flippable-card.css";
import Card from "../Card/Card";
import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ICard, ISelectedCard } from "../Game";
import { ICardClickProps } from "../hooks/useCardClick";

interface IFlippableCardProps {
  selectedCards: ISelectedCard[];
  index: number;
  card: ICard;
  cards: ICard[];
  setCards: (cards: ICard[]) => void;
  handleClick: ({ card, index }: ICardClickProps) => void;
}

// Time to flip the card in milliseconds
const timeToFlip = 5 * 1000;

const FlippableCard = ({
  selectedCards,
  index,
  card,
  cards,
  setCards,
  handleClick,
}: IFlippableCardProps) => {
  const ref = useRef(null);

  // Flip the card after 5 seconds`
  useEffect(() => {
    setTimeout(() => {
      const newCards = [...cards];
      newCards[index].isFlipped = false;
      setCards(newCards);
    }, timeToFlip);
  }, []);

  return (
    <div className="flippable-card-container">
      <CSSTransition
        in={card.isFlipped}
        timeout={300}
        classNames="flip"
        nodeRef={ref}
      >
        <Card
          onClick={() => handleClick({ card, index })}
          bgImage={require(`../../assets/${card.value}.jpg`)}
          cardRef={ref}
          disabled={selectedCards.length === 2}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
