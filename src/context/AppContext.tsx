import { createContext } from "react";

interface IAppContextProps {
  username: string;
  setUsername: (username: string) => void;
}

const AppContext = createContext<IAppContextProps>({
  username: "",
  setUsername: () => {},
});

export default AppContext;
