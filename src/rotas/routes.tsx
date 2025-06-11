import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import LoginPage from "../pages/loginPage";
import CharacterInventory from "../components/CharacterInventory";
import CharacterSelection from "../pages/CharacterSelection";

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
