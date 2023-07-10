import "./card.css";
import "./flip-transition.css";

interface ICardProps {
  onClick: () => void;
}

const Card = ({ onClick }: ICardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Back</div>
      <div className="card-front">Front</div>
    </div>
  );
};

export default Card;
