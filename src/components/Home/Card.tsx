import { useRef } from "react";
import "./card.css";
import "./flip-transition.css";

interface ICardProps {
  onClick: () => void;
  bgImage: string;
  cardRef?: any;
}

const Card = ({ onClick, bgImage, cardRef }: ICardProps) => {
  return (
    <div className="card" onClick={onClick} ref={cardRef}>
      <div
        className="card-back"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        Back
      </div>
      <div className="card-front">Front</div>
    </div>
  );
};

export default Card;
