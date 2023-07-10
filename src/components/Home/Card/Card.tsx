import "./card.css";
import "./flip-transition.css";

interface ICardProps {
  onClick: () => void;
  bgImage: string;
  cardRef?: any;
  disabled?: boolean;
}

const Card = ({ onClick, bgImage, cardRef, disabled }: ICardProps) => {
  return (
    <>
      <div className="card" onClick={onClick} ref={cardRef}>
        <div
          className="card-back"
          style={{
            pointerEvents: disabled ? "none" : "auto",
          }}
        >
          Card
        </div>
        <div
          className="card-front"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </>
  );
};

export default Card;
