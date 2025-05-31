
import { StyledCharInfo } from "./style";

const CharacterBaseInfo = () => {
  return (
    <StyledCharInfo>
      <div className="relative bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg p-4 border-2 border-primary-500/30">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop"
          alt="Personagem RPG"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Nível 25
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-primary-300">Aragorn</h2>
        <p className="text-slate-400">Guerreiro Élfico</p>
      </div>
    </StyledCharInfo>
  );
};

export default CharacterBaseInfo;
