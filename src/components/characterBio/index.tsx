import { useContext } from "react";
import "./style.css";
import { AutoFichaContext } from "../../context/generalContext";
import CharacterContainer from "../characterContainer";
const CharacterBio = () => {
  const { character } = useContext(AutoFichaContext);
  const characterInfo = character?.personagem;
  return (
    <CharacterContainer icone="description" texto="Biografia">
      <div className="flex mb-6">
        <div className="w-1/3 mr-6">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300 transform hover:scale-[1.02]">
            <div className="mb-4 overflow-hidden rounded-lg h-80">
              <img
                src="https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg"
                alt="Thorne"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2"></h3>

            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Raça:</span>
              <span className="text-indigo-300">{characterInfo?.raca}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Classe:</span>
              <span className="text-indigo-300">{characterInfo?.classe}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Idade:</span>
              <span className="text-indigo-300">{characterInfo?.idade}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Alinhamento:</span>
              <span className="text-indigo-300">
                {characterInfo?.alinhamento}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>Divindade:</span>
              <span className="text-indigo-300">
                {characterInfo?.divindade}
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-6 border border-indigo-700 h-full hover:border-amber-500 transition-colors duration-300">
            <h4 className="text-xl font-bold text-amber-400 mb-4">História</h4>
            <p className="text-gray-200 mb-4 leading-relaxed">
              {characterInfo?.historia}
            </p>

            <h4 className="text-xl font-bold text-amber-400 mb-4 mt-6">
              Personalidade
            </h4>
            <p className="text-gray-200 mb-4 leading-relaxed">
              {characterInfo?.personalidade}
            </p>
            <div className="mt-6 flex space-x-3">
              {characterInfo?.caracteristicas.map((caractersitica, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-800 text-indigo-200 rounded-full text-xs uppercase tracking-wider"
                >
                  {caractersitica}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-6 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
        <h4 className="text-xl font-bold text-amber-400 mb-4">Conquistas</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-900 bg-opacity-70 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 hover:shadow-lg hover:shadow-purple-700/30 transition-all transform hover:scale-105">
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined text-3xl text-amber-500 mr-2">
                military_tech
              </span>
              <h5 className="text-white font-bold">Matador de Dragões</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Derrotou o temível dragão vermelho Pyrothor nas Montanhas
              Flamejantes.
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-70 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 hover:shadow-lg hover:shadow-purple-700/30 transition-all transform hover:scale-105">
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined text-3xl text-amber-500 mr-2">
                verified
              </span>
              <h5 className="text-white font-bold">Campeão de Avendor</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Vencedor do grande torneio do reino, ganhando reconhecimento real.
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-70 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 hover:shadow-lg hover:shadow-purple-700/30 transition-all transform hover:scale-105">
            <div className="flex items-center mb-2">
              <span className="material-symbols-outlined text-3xl text-amber-500 mr-2">
                swords
              </span>
              <h5 className="text-white font-bold">Libertador de Eastwatch</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Liderou a resistência que libertou a cidade de Eastwatch dos
              invasores do norte.
            </p>
          </div>
        </div>
      </div>
    </CharacterContainer>
  );
};

export default CharacterBio;
