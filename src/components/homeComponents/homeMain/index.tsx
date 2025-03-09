// import { ReactNode } from "react";
import StyledMain from "../../../styles/components/styledMain";
import CharacterBio from "../../characterBio";

export interface IPersonagem {
  personagem: {
    nome: string;
    raca: string;
    classe: string;
    nivel: number,
    idade: number;
    alinhamento: string;
    divindade: string;
    hp: string;
    experiencia: string;
    historia: string;
    personalidade: string;
    caracteristicas: [string];
  };
}

const HomeMain = ({ personagem }: IPersonagem) =>
  // { children }: { children: ReactNode }
  {
    return (
      <StyledMain>
        <div className="w-64 bg-gray-900 bg-opacity-80 rounded-lg mr-6 overflow-hidden border-2 border-indigo-700 backdrop-blur-sm">
          <div className="p-5 bg-indigo-800 border-b-2 border-indigo-900">
            <div className="flex items-center">
              <img
                src="https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg"
                alt="Thorne"
                className="w-16 h-16 object-cover rounded-full border-2 border-amber-500"
              />
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white">{personagem.nome.split(' ')[0]}</h3>
                <p className="text-indigo-200">{`${personagem.classe} Nível ${personagem.nivel}`}</p>
              </div>
            </div>
            <div className="mt-3 bg-indigo-900 bg-opacity-60 rounded-lg p-2">
              <div className="flex justify-between text-xs text-indigo-100 mb-1">
                <span>HP</span>
                <span>84/84</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div className="mt-2 bg-indigo-900 bg-opacity-60 rounded-lg p-2">
              <div className="flex justify-between text-xs text-indigo-100 mb-1">
                <span>Experiência</span>
                <span>659/1000</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full "></div>
              </div>
            </div>
          </div>

          <nav className="p-2">
            <ul>
              <li className="my-1">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-amber-600 hover:bg-amber-500 transition-colors duration-300 group">
                  <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                    description
                  </span>
                  <span className="font-medium">Biografia</span>
                </button>
              </li>
              <li className="my-1">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 group">
                  <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                    person
                  </span>
                  <span className="font-medium">Ficha</span>
                </button>
              </li>
              <li className="my-1">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 group">
                  <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                    backpack
                  </span>
                  <span className="font-medium">Mochila</span>
                </button>
              </li>
              <li className="my-1">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 group">
                  <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                    auto_fix_high
                  </span>
                  <span className="font-medium">Feitiços</span>
                </button>
              </li>
              <li className="my-1">
                <button className="flex items-center w-full p-3 rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 group">
                  <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                    fitness_center
                  </span>
                  <span className="font-medium">Habilidades</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="mt-auto p-4 border-t border-indigo-800">
            <button className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <span className="material-symbols-outlined group-hover:animate-pulse">
                military_tech
              </span>
              <span>Missões</span>
            </button>
          </div>
        </div>

        <CharacterBio personagem={personagem}></CharacterBio>
      </StyledMain>
    );
  };

export default HomeMain;
