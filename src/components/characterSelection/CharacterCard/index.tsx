import { StyledCharacterCard } from "./styledCharacterCard";

const CharacterCard = () => {
  return (
    <StyledCharacterCard>
      <div className="primary-info">
        <div className="title-container">
          <h3 className="character-title">{}</h3>
        </div>
        <div className="info-container">
          <p className="info-text">Level: {}</p>
          <p className="info-text">Classe: {}</p>
          <p className="info-text">Ancestralidade: {}</p>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">STR</p>
          <p className="font-bold">18</p>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">DEX</p>
          <p className="font-bold">12</p>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">CON</p>
          <p className="font-bold">16</p>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">INT</p>
          <p className="font-bold">10</p>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">WIS</p>
          <p className="font-bold">14</p>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-2 rounded text-center">
          <p className="text-xs text-gray-400">CHA</p>
          <p className="font-bold">13</p>
        </div>
      </div> */}

      <button className="chr-selec-button">
        Select
      </button>
      {/* Next: "Add character equipment preview" */}
    </StyledCharacterCard>
  );
};

export default CharacterCard;
