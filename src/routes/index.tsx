import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/home";
import User from "../pages/user";
import App from "../pages/app";

export const Router = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
};