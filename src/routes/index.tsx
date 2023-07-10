import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
