import { useEffect } from "react";
import FlippableCard from "./FlippableCard";
import { Col, Row } from "antd";
import { FlexCenter } from "../common";

const array = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7];

const Game = () => {
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

  useEffect(() => {
    shuffle(array);
  }, []);

  return (
    <FlexCenter
      style={{
        margin: "0 200px",
      }}
    >
      <Row gutter={25} justify={"center"}>
        {array.map((item, index) => (
          <Col key={index}>
            <FlippableCard item={item} />
          </Col>
        ))}
      </Row>
    </FlexCenter>
  );
};

export default Game;
