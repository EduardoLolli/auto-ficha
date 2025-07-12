// import { Users } from "lucide-react";
import { StyledCharCard } from "./style";
// import { Progress } from "../Progress";
import { Character } from "../../../pages/CharacterSelection";

type CharacterCardProps = {
  character: Character;
  selectedCharacter: string | null;
  setSelectedCharacter: (id: string) => void;
};

const CharacterCard = ({
  character,
  selectedCharacter,
  setSelectedCharacter,
}: CharacterCardProps) => {
  console.log(character);
  return (
    <StyledCharCard
      key={character.id}
      className={`char-card ${
        selectedCharacter === character.id ? "selected-card" : "hover-card"
      }`}
      onClick={() => setSelectedCharacter(character.id)}
    >
      <div className="card-header">
        <div className="card-char-name">{character.name}</div>
        <div className="card-char-desc">{character.description}</div>
      </div>

      <div className="card-atrib">
        {/* Stats */}
        <div className="card-atrib-stats">
          {/* <h4 className="card-atrib-title">
            <Users className="card-atrib-icon" />
            Atributos
          </h4> */}

          <div className="card-stats">
            {
              // Object.entries(character.stats).map(([stat, value]) => (
              //   <div key={stat} className="card-stats-div">
              //     <span className="card-stats-span">
              //       {stat === "força" && "Força"}
              //       {stat === "destreza" && "Destreza"}
              //       {stat === "inteligencia" && "Inteligência"}
              //       {stat === "carisma" && "Carisma"}
              //       {stat === "constituição" && "Constituição"}
              //       {stat === "sabedoria" && "Sabedoria"}
              //     </span>
              //     <div className="card-line">
              //       <Progress value={value} />
              //       <span>{value}</span>
              //     </div>
              //   </div>
              // ))
            }
          </div>
        </div>
      </div>
      <div>
        <button
          className={`char-sele-button ${
            selectedCharacter === character.id
              ? "selected-button"
              : "unselected-button"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCharacter(character.id);
          }}
        >
          {selectedCharacter === character.id ? "Selecionado" : "Selecionar"}
        </button>
      </div>
    </StyledCharCard>
  );
};

export default CharacterCard;
