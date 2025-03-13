import StyledCharacterContainer from "../../styles/components/characterContainer";

const CharacterContainer = ({
  children,
  icone,
  texto,
}: {
  children: React.ReactNode;
  icone: string;
  texto: string;
}) => {
  return (
    <StyledCharacterContainer>
      <div className="header-container">
        <h2>
          <span className="material-symbols-outlined header-icon">{icone}</span>
          {texto}
        </h2>
      </div>
      {children}
    </StyledCharacterContainer>
  );
};

export default CharacterContainer;
