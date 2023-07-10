import "./card.css";
import "./flip-transition.css";

interface ICardProps {
  onClick: () => void;
  bgImage: string;
}

const Card = ({ onClick, bgImage }: ICardProps) => {
  console.log(bgImage);
  return (
    <div className="card" onClick={onClick}>
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
