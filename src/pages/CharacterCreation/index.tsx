import React from "react";
import CCHeader from "../../components/CharacterCreation/Header";
import CCBody from "../../components/CharacterCreation/Body";
import { CCBContainer } from "./style";

const CharacterCreation: React.FC = () => {
  return (
    <CCBContainer>
      <CCHeader />
      <CCBody />
    </CCBContainer>
  );
};

export default CharacterCreation;
