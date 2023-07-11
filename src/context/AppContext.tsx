import { createContext, useContext, useState } from "react";

interface IAuthContextProps {
  hasProvider: boolean;
  username: string;
  setUsername: (username: string) => void;
}

export const AuthContext = createContext<IAuthContextProps>({
  hasProvider: false,
  username: "",
  setUsername: () => {},
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context.hasProvider === false) {
    console.error("No provider for AuthContext");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: any }) => {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  return (
    <AuthContext.Provider
      value={{
        hasProvider: true,
        username,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
