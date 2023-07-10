import FlippableCard from "./FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";
import { useState } from "react";

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
  const [selectedCards, setSelectedCards] = useState<
    {
      value: number;
      index: number;
    }[]
  >([]);
  const [gameArray, setGameArray] = useState<
    {
      value: number;
      isFlipped: boolean;
      index: number;
    }[]
  >(
    newShuffledArray.map((item, index) => ({
      value: item,
      isFlipped: true,
      index,
    }))
  );
  const [attempts, setAttempts] = useState<number>(0);
  const [foundMatches, setFoundMatches] = useState<number[]>([]);

  return (
    <FlexCenter
      style={{
        margin: "0 200px",
      }}
    >
      <Row gutter={25} justify={"center"}>
        {gameArray.map((item, index) => (
          <Col key={index}>
            <FlippableCard
              setSelectedCards={setSelectedCards}
              selectedCards={selectedCards}
              index={index}
              gameItem={item}
              setGameArray={setGameArray}
              gameArray={gameArray}
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
