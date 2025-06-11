import StyledHeader from "./style";
import { User, Settings, LogOut } from "lucide-react";

const GeneralHeader = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="header-flex">
          <div className="header-title-div">
            <span className="header-title">AutoFicha</span>
          </div>
          <div className="header-options">
            <button className="header-button">
              <User className="icons" />
              <span className="button-span">Perfil</span>
            </button>
            <button className="header-button">
              <Settings className="icons" />
              <span className="button-span">Configurações</span>
            </button>
            <button className="header-button">
              <LogOut className="icons" />
              <span className="button-span">Sair</span>
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default GeneralHeader;
