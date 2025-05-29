// import { ReactNode } from "react";
import React from "react";
import StyledMain from "../../../styles/components/styledMain";
import CharacterNavigation from "../../characterNavigation";

const HomeMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMain>
      <CharacterNavigation></CharacterNavigation>
      {children}
    </StyledMain>
  );
};

export default HomeMain;
