import FlippableCard from "./FlippableCard/FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useCardClick } from "./hooks/useCardClick";
import { useGameContext } from "../../context/GameContext";

export interface ICard {
  value: number;
  isFlipped: boolean;
  index: number;
}

export interface ISelectedCard {
  value: number;
  index: number;
}

export interface IGameProps {
  attempts: number;
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

const Game = ({ attempts }: IGameProps) => {
  const [selectedCards, setSelectedCards] = useState<ISelectedCard[]>([]);
  const [cards, setCards] = useState<ICard[]>(shuffledArray);
  const [foundMatches, setFoundMatches] = useState<number[]>([]);
  const { setAttempts, time, setTime, visible, setVisible } = useGameContext();
  const { handleClick } = useCardClick({
    cards,
    foundMatches,
    selectedCards,
    setCards,
    setFoundMatches,
    setSelectedCards,
    attempts,
    setAttempts,
    time,
    setTime,
    visible,
    setVisible,
  });

  // Flip the cards back after 5 seconds
  useEffect(() => {
    setAttempts(0);
    setTimeout(() => {
      const newCards = cards.map((item) => ({ ...item, isFlipped: false }));
      setCards(newCards);
    }, timeToFlip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexCenter>
      <Row gutter={[20, 30]} justify={"center"}>
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
