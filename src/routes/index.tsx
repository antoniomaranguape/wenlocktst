import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyles } from "../pages/styles/styles";
import Home from "../pages/home";
import User from "../pages/user";
import CreateUser from "../pages/user/users-pages/createUser";
import ViewUser from "../pages/user/users-pages/viewUser";
import App from "../pages/app";
import { Login } from "../pages/login";
import { ProtectedRoute } from "./ProtectedRoute";

export const Router = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/cadastro" element={<CreateUser />} />
            <Route path="/user/visualizar/:id" element={<ViewUser />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};