import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyles } from "../pages/styles/styles";
import Home from "../pages/home";
import User from "../pages/user";
import App from "../pages/app";

export const Router = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Route>
      </Routes>
    </>
  );
};