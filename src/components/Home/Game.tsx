import FlippableCard from "./FlippableCard/FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";
import { useState } from "react";

export interface ICard {
  value: number;
  isFlipped: boolean;
  index: number;
}

export interface ISelectedCard {
  value: number;
  index: number;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];
const shuffle = (array: number[]) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
const newShuffledArray = shuffle(array);

// Create a new array of objects with the following structure:

const Game = () => {
  const [selectedCards, setSelectedCards] = useState<ISelectedCard[]>([]);
  const [cards, setCards] = useState<ICard[]>(
    newShuffledArray.map((item, index) => ({
      value: item,
      isFlipped: true,
      index,
    }))
  );
  const [foundMatches, setFoundMatches] = useState<number[]>([]);

  return (
    <FlexCenter
      style={{
        margin: "0 200px",
      }}
    >
      <Row gutter={25} justify={"center"}>
        {cards.map((card, index) => (
          <Col key={index}>
            <FlippableCard
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              index={index}
              card={card}
              setCards={setCards}
              cards={cards}
              foundMatches={foundMatches}
              setFoundMatches={setFoundMatches}
            />
          </Col>
        ))}
      </Row>
    </FlexCenter>
  );
};

export default Game;
