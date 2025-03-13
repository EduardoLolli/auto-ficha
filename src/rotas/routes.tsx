import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoFichaProvider } from "../context/generalContext";
import HomePage from "../pages/homePage";
import CharacterSelection from "../components/characterSelection";
import LoginPage from "../pages/loginPage";
import CharacterBio from "../components/characterBio";
import CharacterSheep from "../components/characterSheep";
import CharacterGrimoire from "../components/characterGrimoire";
import CharacterSkills from "../components/characterSkills";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AutoFichaProvider>
        <Routes>
          <Route path="/" element />
          <Route path="/cha" element={<CharacterSelection />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/biografia"
            element={
              <HomePage>
                {" "}
                <CharacterBio></CharacterBio>{" "}
              </HomePage>
            }
          ></Route>
          <Route
            path="/ficha"
            element={
              <HomePage>
                <CharacterSheep></CharacterSheep>
              </HomePage>
            }
          ></Route>
          <Route
            path="/mochila"
            element={
              <HomePage>
                <>Calma ai calabreso, to codando isso aqui sozinho</>
              </HomePage>
            }
          ></Route>
          <Route
            path="/grimoire"
            element={
              <HomePage>
                <CharacterGrimoire></CharacterGrimoire>
              </HomePage>
            }
          ></Route>
          <Route
            path="/skills"
            element={
              <HomePage>
                <CharacterSkills></CharacterSkills>
              </HomePage>
            }
          ></Route>
        </Routes>
      </AutoFichaProvider>
    </BrowserRouter>
  );
};

export default Rotas;
