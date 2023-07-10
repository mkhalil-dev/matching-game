import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { message } from "antd";
import AppRoutes from "./routes";
import AppContext from "./context/AppContext";

const App: React.FC = () => {
  // We use the AppContext to store the username of the user.
  //eslint-disable-next-line
  const [_, contextHolder] = message.useMessage();
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ username, setUsername }}>
        {contextHolder}
        <AppRoutes />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
