import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import LoginPage from "../pages/loginPage";
import CharacterSelection from "../components/characterSelection";
import CharacterInventory from "../components/CharacterInventory";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<CharacterSelection />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/inventory" element={<CharacterInventory />} />
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
