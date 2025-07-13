import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import LoginPage from "../pages/loginPage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
