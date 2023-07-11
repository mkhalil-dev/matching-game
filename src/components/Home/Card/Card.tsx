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
      <div data-testid="card" className="card" onClick={onClick} ref={cardRef}>
        <div
          data-testid="card-back"
          className="card-back"
          style={{
            pointerEvents: disabled ? "none" : "auto",
            textAlign: "center",
          }}
        >
          Card
        </div>
        <div
          data-testid="card-front"
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
