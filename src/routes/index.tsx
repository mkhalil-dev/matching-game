import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AppContext from "../context/AppContext";

const AppRoutes: React.FC = () => {
  const { username } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {username && <Route path="/home" element={<Home />} />}
    </Routes>
  );
};

export default AppRoutes;
