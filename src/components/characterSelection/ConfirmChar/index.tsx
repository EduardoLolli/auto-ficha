import React from "react";
import { StyledConfirmChar } from "./style";

interface ConfirmCharProps {
  onStartAdventure: () => void;
  onCancel: () => void;
}

const ConfirmChar: React.FC<ConfirmCharProps> = ({
  onStartAdventure,
  onCancel,
}) => {
  return (
    <StyledConfirmChar>
      <div className="confirm-container">
        <div className="confirm-div">
          <button
            type="button"
            className="confirm-button"
            onClick={onStartAdventure}
          >
            Iniciar Aventura
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </StyledConfirmChar>
  );
};

export default ConfirmChar;
