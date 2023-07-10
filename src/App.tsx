import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AppContext from "./context/AppContext";
import { message } from "antd";

const App: React.FC = () => {
  // We use the AppContext to store the username of the user.
  const [messageAPI, contextHolder] = message.useMessage();
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
