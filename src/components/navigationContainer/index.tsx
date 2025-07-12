import { useContext } from "react";
import { AutoFichaContext } from "../../context/generalContext";
import StyledNavigationContainer from "../../styles/components/navigationContainer";

const NavigationContainer = ({ children }: { children: React.ReactNode }) => {
  const { character } = useContext(AutoFichaContext);

  const characterInfo = character?.personagem;
  return (
    <StyledNavigationContainer>
      <div className="navigation-header">
        <div className="header-info">
          <img src="" alt={characterInfo?.nome.split(" ")[0]} />
          <div className="section">
            <h3 >
              {characterInfo?.nome.split(" ")[0]}
            </h3>
            <p >{characterInfo?.classe}</p>
          </div>
        </div>

        <div className="generic-status">
          <div className="status-value">
            <span>HP</span>
            <span>?/{characterInfo?.hp}</span>
          </div>
          <div className="hp-status-bar">
            <div className="hp-bar"></div>
          </div>
        </div>

        <div className="generic-status">
          <div className="status-value">
            <span>Experiência</span>
            <span>659/{characterInfo?.experiencia}</span>
          </div>
          <div className="xp-status-bar">
            <div className="xp-bar"></div>
          </div>
        </div>
      </div>

      {children}

      <div className="mt-auto p-4 border-t border-indigo-800">
        <button className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center space-x-2 group">
          <span className="material-symbols-outlined group-hover:animate-pulse">
            military_tech
          </span>
          <span>Missões</span>
        </button>
      </div>
    </StyledNavigationContainer>
  );
};
export default NavigationContainer;
