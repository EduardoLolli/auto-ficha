import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import CharacterSelection from "./components/characterSelection";
import CharacterSheep from "./components/characterSheep";
import CharacterGrimoire from "./components/characterGrimoire";
import CharacterSkills from "./components/characterSkills";
import CharacterBio from "./components/characterBio";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/cha" element={<CharacterSelection />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bio" element={<CharacterBio></CharacterBio>}></Route>
        <Route
          path="/ficha"
          element={<CharacterSheep></CharacterSheep>}
        ></Route>
        <Route path="/mochila" element={<HomePage></HomePage>}></Route>
        <Route
          path="/grimoire"
          element={<CharacterGrimoire></CharacterGrimoire>}
        ></Route>
        <Route
          path="/skills"
          element={<CharacterSkills></CharacterSkills>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
