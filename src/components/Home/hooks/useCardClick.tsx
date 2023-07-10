import { ICard, ISelectedCard } from "../Game";
import { showMessage } from "../../common";

interface IUseCardClickProps {
  cards: ICard[];
  selectedCards: ISelectedCard[];
  foundMatches: number[];
  setCards: (cards: ICard[]) => void;
  setSelectedCards: (selectedCards: ISelectedCard[]) => void;
  setFoundMatches: (foundMatches: number[]) => void;
}

export interface ICardClickProps {
  card: ICard;
  index: number;
}

// Time to flip back a card when not correct in milliseconds
const timetoUnflip = 2 * 1000;

export const useCardClick = ({
  cards,
  foundMatches,
  selectedCards,
  setCards,
  setFoundMatches,
  setSelectedCards,
}: IUseCardClickProps) => {
  const handleClick = ({ card, index }: ICardClickProps) => {
    // If the card is already flipped or if there are 2 already flipped, do nothing
    if (card.isFlipped || selectedCards.length === 2) return;
    // If the card is not flipped, flip it
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    // Add the card to the selected cards
    setSelectedCards([...selectedCards, { value: card.value, index }]);
    if (selectedCards.length === 1) {
      // If there is one selected card, check if the value of the selected card is the same as the value of the card that was just clicked
      if (selectedCards[0].value !== card.value) {
        // If the values are not the same flip the cards back after 1 second
        setTimeout(() => {
          setCards(
            cards.map((item) => {
              if (!foundMatches.includes(item.value)) {
                return { ...item, isFlipped: false };
              }
              return { ...item };
            })
          );
          setSelectedCards([]);
        }, timetoUnflip);
      } else {
        // If the values are the same, add the index of the cards to the foundMatches array
        if (foundMatches.length === 7) {
          showMessage("success", "You won!");
        }
        setFoundMatches([...foundMatches, card.value]);
        setSelectedCards([]);
        // If the foundMatches array has a length of 14, the game is over
      }
      // Reset the selected cards
    }
  };

  return { handleClick };
};
