import { ICard, ISelectedCard } from "../Game";

interface IUseCardClickProps {
  cards: ICard[];
  selectedCards: ISelectedCard[];
  foundMatches: number[];
  attempts: number;
  time: number;
  visible: boolean;
  setAttempts: (attempts: number) => void;
  setCards: (cards: ICard[]) => void;
  setSelectedCards: (selectedCards: ISelectedCard[]) => void;
  setFoundMatches: (foundMatches: number[]) => void;
  setTime: (time: number) => void;
  setVisible: (visible: boolean) => void;
}

export interface ICardClickProps {
  card: ICard;
}

// Time to flip back a card when not correct after 2 seconds
const timetoUnflip = 2 * 1000;

export const useCardClick = ({
  cards,
  foundMatches,
  selectedCards,
  setCards,
  setFoundMatches,
  setSelectedCards,
  attempts,
  setAttempts,
  time,
  setTime,
  visible,
  setVisible,
}: IUseCardClickProps) => {
  const handleClick = ({ card }: ICardClickProps) => {
    const { index, value, isFlipped } = card;

    // If the card is already flipped or if there are 2 already flipped, do nothing
    if (isFlipped || selectedCards.length === 2) return;
    // If the time is 0, set the time to the current time
    if (time === 0) setTime(Date.now());
    // If the card is not flipped, flip it
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    // Add the card to the selected cards
    setSelectedCards([...selectedCards, { value: value, index }]);
    if (selectedCards.length === 1) {
      // If there is one selected card, check if the value of the selected card is the same as the value of the card that was just clicked
      if (selectedCards[0].value !== value) {
        // If the values are not the same flip the cards back after 2 second
        setAttempts(attempts + 1);
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
        // If the foundMatches array already has a length of 7, the game is over
        if (foundMatches.length === 7) {
          // Calculate the time it took to finish the game
          const timeToFinish = Math.floor((Date.now() - time) / 1000);
          setTime(timeToFinish);
          setVisible(true);
        } else {
          // If the values are the same, add the index of the cards to the foundMatches array
          setFoundMatches([...foundMatches, value]);
        }
        // Reset the selected cards
        setSelectedCards([]);
      }
    }
  };

  return { handleClick };
};
