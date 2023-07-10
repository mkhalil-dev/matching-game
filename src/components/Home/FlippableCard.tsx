import "./flippable-card.css";
import Card from "./Card";
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { showMessage } from "../common";

interface IFlippableCardProps {
  setSelectedCards: (selectedCards: { value: number; index: number }[]) => void;
  selectedCards: {
    value: number;
    index: number;
  }[];
  index: number;
  gameItem: {
    value: number;
    isFlipped: boolean;
    index: number;
  };
  gameArray: {
    value: number;
    isFlipped: boolean;
    index: number;
  }[];
  setGameArray: (
    gameArray: {
      value: number;
      isFlipped: boolean;
      index: number;
    }[]
  ) => void;
  foundMatches: number[];
  setFoundMatches: (foundMatches: number[]) => void;
}

// Time to flip the card in milliseconds
const timeToFlip = 1 * 1000;

// Time to flip back a card when not correct in milliseconds
const timetoUnflip = 2 * 1000;

const FlippableCard = ({
  setSelectedCards,
  selectedCards,
  index,
  gameItem,
  gameArray,
  setGameArray,
  foundMatches,
  setFoundMatches,
}: IFlippableCardProps) => {
  const ref = useRef(null);
  // Flip the card after 5 seconds`
  useEffect(() => {
    setTimeout(() => {
      const newGameArray = [...gameArray];
      newGameArray[index].isFlipped = false;
      setGameArray(newGameArray);
    }, timeToFlip);
  }, []);

  const handleClick = () => {
    // If the card is already flipped or if there are 2 already flipped, do nothing
    if (gameItem.isFlipped || selectedCards.length === 2) return;
    // If the card is not flipped, flip it
    const newGameArray = [...gameArray];
    newGameArray[index].isFlipped = true;
    setGameArray(newGameArray);
    // Add the card to the selected cards
    setSelectedCards([...selectedCards, { value: gameItem.value, index }]);
    if (selectedCards.length === 1) {
      // If there is one selected card, check if the value of the selected card is the same as the value of the card that was just clicked
      if (selectedCards[0].value !== gameItem.value) {
        // If the values are not the same flip the cards back after 1 second
        setTimeout(() => {
          setGameArray(
            gameArray.map((item) => {
              if (!foundMatches.includes(item.value)) {
                return { ...item, isFlipped: false };
              }
              return { ...item };
            })
          );
          setSelectedCards([]);
        }, timetoUnflip);
      } else {
        // If the values are the same, add the index of the cards to the foundMatches array
        if (foundMatches.length === 7) {
          showMessage("success", "You won!");
        }
        setFoundMatches([...foundMatches, gameItem.value]);
        setSelectedCards([]);
        // If the foundMatches array has a length of 14, the game is over
      }
      // Reset the selected cards
    }
  };
  return (
    <div className="flippable-card-container">
      <CSSTransition
        in={gameItem.isFlipped}
        timeout={300}
        classNames="flip"
        nodeRef={ref}
      >
        <Card
          onClick={handleClick}
          bgImage={require(`../assets/${gameItem.value}.jpg`)}
          cardRef={ref}
          disabled={selectedCards.length === 2}
        />
      </CSSTransition>
    </div>
  );
};

export default FlippableCard;
