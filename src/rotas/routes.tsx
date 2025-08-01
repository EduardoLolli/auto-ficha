import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import React, { lazy } from "react";
const LoginPage = lazy(() => import("../pages/loginPage"));
const CharacterSelection = lazy(() => import("../pages/CharacterSelection"));
const CharacterCreation = lazy(() => import("../pages/CharacterCreation"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense>
                <LoginPage />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <React.Suspense>
                <LoginPage />
              </React.Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense>
                <RegisterPage />
              </React.Suspense>
            }
          />
          <Route
            path="/charSele"
            element={
              <React.Suspense>
                <CharacterSelection />
              </React.Suspense>
            }
          />
          <Route
            path="/createChar"
            element={
              <React.Suspense>
                <CharacterCreation />
              </React.Suspense>
            }
          />
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
