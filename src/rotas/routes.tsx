import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import LoginPage from "../pages/loginPage";
import CharacterSelection from "../pages/CharacterSelection";
import CharacterCreation from "../pages/CharacterCreation";
import RegisterPage from "../pages/RegisterPage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/charSele" element={<CharacterSelection />} />
          <Route path="/createChar" element={<CharacterCreation />} />
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
