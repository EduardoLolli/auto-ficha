import React from "react";
import { HeaderContainer } from "./style";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <HeaderContainer>{children}</HeaderContainer>
);

export default Header;
