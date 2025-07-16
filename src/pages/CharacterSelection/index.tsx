import React from "react";
import { StyledCharacterSelection } from "./style";
import CharSeleHeader from "../../components/CharacterSelection/Header";
import CharacterSelectionBody from "../../components/CharacterSelection/CharacterSelectionBody";

export default function CharacterSelection() {
  return (
    <StyledCharacterSelection>
      <CharSeleHeader />
      <CharacterSelectionBody/>
    </StyledCharacterSelection>
  );
}
