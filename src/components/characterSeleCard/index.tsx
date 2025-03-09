import StyledCharacterSeleCard from "../../styles/components/characterSeleCard";

interface ICharacter {
  character: {
    name: string;
    class: string;
    level: number;
    image: string;
    icon: string;
  };
}

const CharacterSeleCard = ({character}: ICharacter) => {
  return (
    <StyledCharacterSeleCard
      className="bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden border-2 border-indigo-700 hover:border-amber-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-700/50 group"
    >
      <div className="h-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4 z-20">
          <div className="flex items-center">
            <span className="bg-amber-500 p-2 rounded-full mr-2 group-hover:animate-pulse">
              <span className="material-symbols-outlined">
                {character.icon}
              </span>
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{character.name}</h3>
              <p className="text-indigo-300">{character.class}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-white">
            <span className="text-amber-400 font-bold">
              Nível {character.level}
            </span>
          </div>
          <div className="flex space-x-1"></div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-300">
            <span>Força</span>
            <div className="w-32 bg-gray-700 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: `${30 + Math.random() * 50}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-300">
            <span>Agilidade</span>
            <div className="w-32 bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${30 + Math.random() * 50}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-300">
            <span>Inteligência</span>
            <div className="w-32 bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${30 + Math.random() * 50}%` }}
              ></div>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full py-2 bg-indigo-800 text-white rounded hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center space-x-2 group-hover:bg-amber-600">
          <span>Selecionar</span>
          <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </StyledCharacterSeleCard>
  );
};

export default CharacterSeleCard;
