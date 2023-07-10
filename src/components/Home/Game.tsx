import FlippableCard from "./FlippableCard/FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";
import { useState } from "react";
import { shuffle } from "lodash";

export interface ICard {
  value: number;
  isFlipped: boolean;
  index: number;
}

export interface ISelectedCard {
  value: number;
  index: number;
}

const shuffledArray = shuffle([
  0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7,
]).map((item, index) => ({
  value: item,
  isFlipped: true,
  index,
}));

// Create a new array of objects with the following structure:

const Game = () => {
  const [selectedCards, setSelectedCards] = useState<ISelectedCard[]>([]);
  const [cards, setCards] = useState<ICard[]>(shuffledArray);
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
