import { LogOut } from "lucide-react";
import React from "react";
import { StyledLogoutButton } from "./styled";

const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };
  return (
    <StyledLogoutButton onClick={() => handleLogout()}>
      <LogOut className="logout-icon" />
      Sair
    </StyledLogoutButton>
  );
};

export default LogoutButton;
