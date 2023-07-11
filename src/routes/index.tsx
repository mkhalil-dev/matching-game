import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { useAuthContext } from "../context/AppContext";
import { Success } from "../pages/Success";

const AppRoutes: React.FC = () => {
  const { username } = useAuthContext();
  return (
    <Routes>
      {username ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/" element={<Home />} />
        </>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
