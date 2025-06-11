"use client";

import type React from "react";
import { useState } from "react";
import GeneralHeader from "../../components/GeneralComponents/Header";
import { StyledCharSelePage } from "./style";
import CharSelectHeader from "../../components/characterSelection/CharSelectHeader";
import CharacterCard from "../../components/characterSelection/CharacterCard";
import ConfirmChar from "../../components/characterSelection/ConfirmChar";

export interface Character {
  id: string;
  name: string;
  class: string;
  description: string;
  image: string;
  stats: {
    força: number;
    destreza: number;
    inteligencia: number;
    carisma: number;
    constituição: number;
    sabedoria: number;
  };
  specialAbility: string;
  icon: React.ReactNode;
}

const characters: Character[] = [
  {
    id: "1",
    name: "Guerreiro",
    image: "/images/warrior.png",
    icon: null,
    class: "Guerreiro",
    description: "Um combatente forte e resistente, ideal para iniciantes.",
    stats: {
      força: 18,
      destreza: 15,
      inteligencia: 12,
      carisma: 14,
      constituição: 16,
      sabedoria: 13,
    },
    specialAbility: "Ataque Poderoso: causa dano extra ao inimigo.",
  },
  {
    id: "2",
    name: "Mago",
    image: "/images/mage.png",
    icon: null,
    class: "Mago",
    description:
      "Especialista em magias e feitiços, possui grande inteligência.",
    stats: {
      força: 10,
      destreza: 13,
      inteligencia: 19,
      carisma: 15,
      constituição: 12,
      sabedoria: 17,
    },
    specialAbility: "Bola de Fogo: lança uma poderosa magia de fogo.",
  },
  {
    id: "3",
    name: "Arqueiro",
    image: "/images/archer.png",
    icon: null,
    class: "Arqueiro",
    description: "Ágil e preciso, ataca de longe com seu arco.",
    stats: {
      força: 13,
      destreza: 18,
      inteligencia: 14,
      carisma: 12,
      constituição: 13,
      sabedoria: 15,
    },
    specialAbility: "Tiro Certeiro: acerta um alvo com precisão máxima.",
  },
  {
    id: "4",
    name: "Clérigo",
    image: "/images/cleric.png",
    icon: null,
    class: "Clérigo",
    description: "Curandeiro do grupo, protege e restaura aliados.",
    stats: {
      força: 12,
      destreza: 11,
      inteligencia: 15,
      carisma: 17,
      constituição: 14,
      sabedoria: 18,
    },
    specialAbility: "Cura Divina: restaura a vida de um aliado.",
  },
  {
    id: "5",
    name: "Ladino",
    image: "/images/rogue.png",
    icon: null,
    class: "Ladino",
    description: "Mestre em furtividade e ataques rápidos.",
    stats: {
      força: 11,
      destreza: 19,
      inteligencia: 15,
      carisma: 16,
      constituição: 12,
      sabedoria: 14,
    },
    specialAbility: "Ataque Furtivo: causa dano extra ao atacar de surpresa.",
  },
];

export default function CharacterSelection() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  return (
    <StyledCharSelePage>
      <GeneralHeader />
      <CharSelectHeader />

      {/* Character Grid */}
      <div className="char-containers">
        <div className="char-grid">
          {characters.map((character) => (
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
