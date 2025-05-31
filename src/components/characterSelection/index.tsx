import CharacterCard from "./CharacterCard";
import GenericHeader from "../GeneralComponents/homeHeader/index";
import { CharacterSelectionContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeFooter from "../GeneralComponents/homeFooter";
import DownButtons from "./DownButtons";

const CharacterSelection = () => {
  interface Icharacters {
    ativo: boolean;
    experience: number;
    id: number;
    level: number;
    money: number;
    name: string;
  }

  const [chracterList, setCharacterList] = useState<Icharacters[]>([]);

  const link = "http://af-laravel-api.test/api/character/charactersfrom";

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get(link, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        setCharacterList(response.data.data);
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <CharacterSelectionContainer>
      <GenericHeader />

      <div className="char-select-body">
        <h2>Select Your Character</h2>
        <p className="title-p">
          Choose your hero or create a new legend to begin your adventure
        </p>

        <div className="cards-container">
          {chracterList.map((char: Icharacters) => {
            return (
              <CharacterCard
                key={char.id}
                name={char.name}
                experience={char.experience}
                level={char.level}
                money={char.money}
              />
            );
          })}
        </div>
      </div>

      <DownButtons />

      <HomeFooter />
    </CharacterSelectionContainer>
  );
};

export default CharacterSelection;
