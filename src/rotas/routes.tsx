import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import LoginPage from "../pages/loginPage";
import CharacterSelection from "../pages/CharacterSelection";
import InventoryPage from "../pages/Inventory";
import InventorySection from "../components/CharacterInventory/InventorySection";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<CharacterSelection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/equiped" element={<InventorySection />} />
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
