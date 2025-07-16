import React, { useEffect } from "react";
import { ChSelectionBody } from "./style";
import axios from "axios";
import { StyledChSlCard } from "../CharacterCard/style";

const CharacterSelectionBody = () => {
  const token = localStorage.getItem("token");
  const [characters, setCharacter] = React.useState<any[]>([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "http://af-laravel-api.test/api/character/charactersfrom",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCharacter(response.data.data);
        console.log(characters);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <ChSelectionBody>
      <div className="title-container">
        <h2 className="title">Seus Personagens</h2>
        <p className="parag">
          Escolha um personagem para gerenciar suas aventuras
        </p>
      </div>
      <div className="Ch-card-container">
        {characters.map((character) => (
          <StyledChSlCard key={character.id}>{character.name}</StyledChSlCard>
        ))}
      </div>
    </ChSelectionBody>
  );
};

export default CharacterSelectionBody;
