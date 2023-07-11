import { createContext, useContext, useState } from "react";

interface IGameContextProps {
  hasProvider: boolean;
  attempts: number;
  setAttempts: (attempts: number) => void;
}

export const GameContext = createContext<IGameContextProps>({
  hasProvider: false,
  attempts: 0,
  setAttempts: () => {},
});

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context.hasProvider === false) {
    console.error("No provider for GameContext");
  }
  return context;
};

export const GameContextProvider = ({ children }: { children: any }) => {
  const [attempts, setAttempts] = useState<number>(0);
  return (
    <GameContext.Provider
      value={{
        hasProvider: true,
        attempts,
        setAttempts,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
