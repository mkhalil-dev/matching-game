import FlippableCard from "./FlippableCard/FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useCardClick } from "./hooks/useCardClick";

export interface ICard {
  value: number;
  isFlipped: boolean;
  index: number;
}

export interface ISelectedCard {
  value: number;
  index: number;
}

// Create an array of 16 cards with values from 0 to 7 and shuffle them
const shuffledArray = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7,
]).map((item, index) => ({
  value: item,
  isFlipped: true,
  index,
}));

// Time to flip the card in milliseconds
const timeToFlip = 5 * 1000;

const Game = () => {
  const [selectedCards, setSelectedCards] = useState<ISelectedCard[]>([]);
  const [cards, setCards] = useState<ICard[]>(shuffledArray);
  const [foundMatches, setFoundMatches] = useState<number[]>([]);
  const { handleClick } = useCardClick({
    cards,
    foundMatches,
    selectedCards,
    setCards,
    setFoundMatches,
    setSelectedCards,
  });

  // Flip the cards back after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      const newCards = cards.map((item) => ({ ...item, isFlipped: false }));
      setCards(newCards);
    }, timeToFlip);
  }, []);

  return (
    <FlexCenter>
      <Row
        gutter={[30, 30]}
        justify={"center"}
        style={{
          margin: "0 auto",
        }}
      >
        {cards.map((card, index) => (
          <Col key={index}>
            <FlippableCard
              handleClick={handleClick}
              selectedCards={selectedCards}
              card={card}
            />
          </Col>
        ))}
      </Row>
    </FlexCenter>
  );
};

export default Game;
