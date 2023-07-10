import { createContext } from "react";

interface AppContextProps {
  username: string;
  setUsername: (username: string) => void;
}

const AppContext = createContext<AppContextProps>({
  username: "",
  setUsername: () => {},
});

export default AppContext;
