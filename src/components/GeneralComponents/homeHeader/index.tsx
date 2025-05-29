import StyledHeader from "../../../styles/components/styledHeader";

const GenericHeader = () => {
  return (
      <StyledHeader>
        <h1 className="header-title">
          <span className="span-f">Auto</span> Ficha
          <span className="span-s">RPG System</span>
        </h1>
        <div className="buttons-cont">
          <button className="help-button">
            <span className="material-symbols-outlined">help</span>
            Help
          </button>
          <button className="settings-button">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </div>
      </StyledHeader>
  );
};

export default GenericHeader;
