import React from "react";
import { BrowserRouter } from "react-router-dom";
import { message } from "antd";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AppContext";
import { GameContextProvider } from "./context/GameContext";

const App: React.FC = () => {
  // We use the AppContext to store the username of the user.
  //eslint-disable-next-line
  const [_, contextHolder] = message.useMessage();

  return (
    <BrowserRouter>
      <AuthProvider>
        <GameContextProvider>
          {contextHolder}
          <AppRoutes />
        </GameContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
