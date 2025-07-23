import React from "react";
import { StyledBIContainer } from "./style";
import CamIcon from "../../../icons/cam";
import userImage from "../../../assets/images/user-image.png";

const CCBasicInfo: React.FC = () => {
  return (
    <StyledBIContainer>
      <div className="img-section">
        <div className="img-container">
          <div className="img-card">
            <img className="image" src={userImage} alt="Avatar do Personagem" />
          </div>
          <button className="img-button">
            <CamIcon />
          </button>
        </div>
      </div>
      <div className="char-name">
        <label className="name-label" htmlFor="name">
          Nome do Personagem
        </label>
        <input
          className="name-input"
          id="name"
          placeholder="Ex: Aelindra Pedraverde"
          required
        />
      </div>
      <div className="char-race-class">
        <div className="char-race">
          <label htmlFor="race">Raça</label>
          <select required className="select">
            <option value="" disabled selected>
              Selecione uma raça
            </option>
          </select>
        </div>
        <div className="char-class">
          <label htmlFor="class">Classe</label>
          <select required className="select">
            <option value="" disabled selected>
              Selecione uma classe
            </option>
          </select>
        </div>
      </div>
    </StyledBIContainer>
  );
};

export default CCBasicInfo;
