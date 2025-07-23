import React from "react";
import { StyledCard } from "./style";

interface CardProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
}

const CCCard: React.FC<CardProps> = ({ icon, title, children }) => {
  return (
    <StyledCard>
      <div className="title-container">
        <div className="title-icon">{icon}</div>
        <h3 className="title">{title}</h3>
      </div>

      <div className="children-container">{children}</div>
    </StyledCard>
  );
};

export default CCCard;
