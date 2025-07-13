import { Shield, Sparkles, Sword } from "lucide-react";
import React from "react";
import { BgIcon, BGIconRev, IconsContainer, StyledLoginIcons } from "./style";

const LoginIcons = () => {
  return (
    <StyledLoginIcons>
      <IconsContainer>
        <BgIcon>
          <Sword className="icon" />
        </BgIcon>
        <BGIconRev>
          <Shield className="icon" />
        </BGIconRev>
        <BgIcon>
          <Sparkles className="icon" />
        </BgIcon>
      </IconsContainer>
      <h1 className="head-title ">RPG Auto System</h1>
      <p className="head-p">Gerencie seus personagens e aventuras</p>
    </StyledLoginIcons>
  );
};

export default LoginIcons;
