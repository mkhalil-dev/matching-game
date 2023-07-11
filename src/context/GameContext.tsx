import { createContext, useContext, useState } from "react";

interface IGameContextProps {
  hasProvider: boolean;
  attempts: number;
  time: number;
  visible: boolean;
  setAttempts: (attempts: number) => void;
  setTime: (time: number) => void;
  setVisible: (visible: boolean) => void;
}

export const GameContext = createContext<IGameContextProps>({
  hasProvider: false,
  attempts: 0,
  time: 0,
  visible: false,
  setAttempts: () => {},
  setTime: () => {},
  setVisible: () => {},
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
  const [time, setTime] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <GameContext.Provider
      value={{
        hasProvider: true,
        attempts,
        time,
        visible,
        setAttempts,
        setTime,
        setVisible,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
