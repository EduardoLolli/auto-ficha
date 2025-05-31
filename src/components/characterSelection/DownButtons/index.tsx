import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledDownButtons } from "./styled";

const DownButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      navigate("/login");
    }
  };

  return (
    <StyledDownButtons className="">
      <button>
        <span className="material-symbols-outlined">add_circle</span>
        Create New Character
      </button>
      <button>
        <span className="material-symbols-outlined">file_upload</span>
        Import Character
      </button>
      <button onClick={() => handleLogout()}>
        <span className="material-symbols-outlined">logout</span>
        Exit Game
      </button>
    </StyledDownButtons>
  );
};

export default DownButtons;
