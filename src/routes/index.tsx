import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { useAuthContext } from "../context/AppContext";

const AppRoutes: React.FC = () => {
  const { username } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {username && <Route path="/home" element={<Home />} />}
    </Routes>
  );
};

export default AppRoutes;
