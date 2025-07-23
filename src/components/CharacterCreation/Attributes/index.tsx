import React, { useState } from "react";
import { StyledAttributesSection } from "./style";
import { MinusIcon } from "lucide-react";
import PlusIcon from "../../../icons/plus";

const Attributes: React.FC = () => {
  const [newCharacter, setNewCharacter] = useState({
    id: "",
    name: "",
    level: 1,
    class: "",
    race: "",
    hp: 0,
    maxHp: 0,
    xp: 0,
    nextLevelXp: 300,
    heroism: 0,
    stats: {
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      constitution: 10,
    },
    initialStatsAfterRace: {
      // Inicializa com os valores base
      strength: 10,
      dexterity: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      constitution: 10,
    },
    freeAttributePoints: 0,
    backstory: "",
    avatar: "/placeholder.svg?height=96&width=96",
  });

  const attributeNames = {
    strength: "Força",
    dexterity: "Destreza",
    intelligence: "Inteligência",
    wisdom: "Sabedoria",
    charisma: "Carisma",
    constitution: "Constituição",
  };
  return (
    <StyledAttributesSection>
      <div className="attributes-section">
        <p>
          Pontos Livres para Distribuir: <span></span>
        </p>
      </div>
      <div className="attributes-container">
        {Object.entries(newCharacter.stats).map(([key, value]) => (
          <div key={key} className="attributes">
            <label className="">
              {attributeNames[key as keyof typeof attributeNames]}
            </label>
            <div className="">
              <button type="button" className="" disabled={value <= 1}>
                <MinusIcon className="" />
              </button>
              <input
                type="number"
                min="1"
                max="20"
                value={value}
                readOnly // Torna o campo somente leitura, alterações via botões
                className=""
              />
              <button
                type="button"
                className=""
                disabled={value >= 20 || newCharacter.freeAttributePoints === 0}
              >
                <PlusIcon className="" />
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-1">Mod:</p>
          </div>
        ))}
      </div>
    </StyledAttributesSection>
  );
};

export default Attributes;
