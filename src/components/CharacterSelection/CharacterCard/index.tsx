import { Crown } from "lucide-react";
import {
  CharacterAvatar,
  CharacterAvatarFallback,
  CharacterAvatarWrapper,
  CharacterCardContent,
  CharacterCardHeader,
  CharacterName,
  ClassIconWrapper,
  HpBarBackground,
  HpBarWrapper,
  HpText,
  LevelBadgeWrapper,
  SelectCharacterButton,
  StyledChSlCard,
} from "./style";

const CharacterCard = () => {
  return (
    <StyledChSlCard
    // key={character.id}
    // onClick={() => handleSelectCharacter(character.id)}
    >
      <CharacterCardHeader>
        <CharacterAvatarWrapper>
          <CharacterAvatar>
            {/* <AvatarImage
              src={character.avatar || "/placeholder.svg"}
              alt={character.name}
            /> */}
            <CharacterAvatarFallback>
              {/* {character.name
                .split(" ")
                .map((n) => n[0])
                .join("")} */}
            </CharacterAvatarFallback>
          </CharacterAvatar>
          <CharacterName>
            <h3>{/* {character.name} */}</h3>
            <p>{/* {character.race} {character.class} */}</p>
          </CharacterName>
        </CharacterAvatarWrapper>
      </CharacterCardHeader>
      <CharacterCardContent>
        <div>
          <LevelBadgeWrapper>
            <Crown className="h-4 w-4 text-yellow-500" />
            <div>
              Nível
              {/* {character.level} */}
            </div>
          </LevelBadgeWrapper>

          <ClassIconWrapper>
            <div>
              {/* <IconComponent   className="h-6 w-6 text-slate-600" /> */}
            </div>
          </ClassIconWrapper>

          <HpBarWrapper>
            <HpText>
              <span>Vida</span>
              <span>{/* {character.hp}/{character.maxHp} */}</span>
            </HpText>
            <HpBarBackground>
              {/* <HpBarFill
              // $percentage={hpPercentage}
              // $color={getHpColor(hpPercentage)}
              /> */}
            </HpBarBackground>
          </HpBarWrapper>

          <SelectCharacterButton>Selecionar Personagem</SelectCharacterButton>
        </div>
      </CharacterCardContent>
    </StyledChSlCard>
  );
};

export default CharacterCard;
