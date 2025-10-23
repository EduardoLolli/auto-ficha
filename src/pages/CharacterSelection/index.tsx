"use client";

import { useEffect, useState } from "react";
import GeneralHeader from "../../components/GeneralComponents/Header";
import { StyledCharSelePage } from "./style";
import CharSelectHeader from "../../components/characterSelection/CharSelectHeader";
import CharacterCard from "../../components/characterSelection/CharacterCard";
import ConfirmChar from "../../components/characterSelection/ConfirmChar";
import { useContext } from "react";
import { AutoFichaContext } from "../../context/generalContext";
import axios from "axios";

export interface Character {
  id: string;
  name: string;
  class: string;
  description: string;
  // stats?: {
  //   força: number;
  //   destreza: number;
  //   inteligencia: number;
  //   carisma: number;
  //   constituição: number;
  //   sabedoria: number;
  // };
}

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [characters, setCharacters] = useState(null);

  const { setLoading } = useContext(AutoFichaContext);

  const fetchCharacters = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const URL = "http://af-laravel-api.test/api/character/charactersfrom";
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Usuário não autenticado");
        }
        setCharacters(response.data.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      console.log("kkkk");
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <StyledCharSelePage>
      <GeneralHeader />
      <CharSelectHeader />

      {/* Character Grid */}
      <div className="char-containers">
        <div className="char-grid">
          {characters &&
            (characters as Character[]).map((character: Character) => (
              <CharacterCard
                key={character.id}
                character={character}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
              />
            ))}
        </div>

        {selectedCharacter && (
          <ConfirmChar
            onStartAdventure={() => {
              console.log("Teste");
            }}
            onCancel={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </StyledCharSelePage>
  );
}
