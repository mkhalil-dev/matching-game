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
      <div className="card-back">Card</div>
      <div
        className="card-front"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Card;
