import React from "react";
import Header from "../../SharedComponents/Header";
import { StyledCCHeader } from "./style";
import LeftArrow from "../../../icons/left-arow";

const CCHeader: React.FC = () => (
  <StyledCCHeader>
    <Header>
      <button className="cc-icon">
        <LeftArrow />
      </button>
      <h1 className="cc-title">Criar Personagem</h1>
    </Header>
  </StyledCCHeader>
);

export default CCHeader;
