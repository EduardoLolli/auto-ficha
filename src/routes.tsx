import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage"; 
import CharacterSelection from "./components/characterSelection";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage><CharacterSelection></CharacterSelection></HomePage>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ficha" element={<HomePage></HomePage>}></Route>
        <Route path="/mochila" element={<HomePage></HomePage>}></Route>
        <Route path="/grimoire" element={<HomePage></HomePage>}></Route>
        <Route path="/habilidades" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
