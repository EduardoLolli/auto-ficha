// import { ReactNode } from "react";
import StyledMain from "../../../styles/components/homePage/styledMain";

const HomeMain = (
// { children }: { children: ReactNode }
) => {
  return (
    <StyledMain>
      <div className="w-64 bg-gray-900 bg-opacity-80 rounded-lg mr-6 overflow-hidden border-2 border-indigo-700 backdrop-blur-sm">
        <div className="p-5 bg-indigo-800 border-b-2 border-indigo-900">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1565316151047-153c2e5c0925?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Thorne"
              className="w-16 h-16 object-cover rounded-full border-2 border-amber-500"
            />
            <div className="ml-3">
              <h3 className="text-xl font-bold text-white">Thorne</h3>
              <p className="text-indigo-200">Guerreiro Nível 9</p>
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
              <span>Energia</span>
              <span>65/70</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
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

      <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-lg border-2 border-indigo-700 p-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-amber-500 pb-2 flex items-center">
            <span className="material-symbols-outlined mr-3 text-amber-500">
              description
            </span>
            Biografia do Herói
          </h2>
        </div>

        <div className="flex mb-6">
          <div className="w-1/3 mr-6">
            <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300 transform hover:scale-[1.02]">
              <div className="mb-4 overflow-hidden rounded-lg h-80">
                <img
                  src="https://images.unsplash.com/photo-1565316151047-153c2e5c0925?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="Thorne"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Thorne da Lâmina Flamejante
              </h3>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Raça:</span>
                <span className="text-indigo-300">Humano</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Classe:</span>
                <span className="text-indigo-300">Guerreiro</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Idade:</span>
                <span className="text-indigo-300">32 anos</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Alinhamento:</span>
                <span className="text-indigo-300">Neutro Bom</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Divindade:</span>
                <span className="text-indigo-300">Tyr, Deus da Justiça</span>
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-6 border border-indigo-700 h-full hover:border-amber-500 transition-colors duration-300">
              <h4 className="text-xl font-bold text-amber-400 mb-4">
                História
              </h4>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Nascido nas terras fronteiriças de Avendor, Thorne cresceu como
                filho de um ferreiro respeitado. Desde jovem, demonstrou
                extraordinária força e habilidade com armas, chamando a atenção
                da guilda local de guerreiros.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Aos 16 anos, sua vila foi atacada por uma horda de orcs,
                deixando-o órfão. Jurou vingar sua família e proteger os
                inocentes, ingressando na Ordem da Lâmina Flamejante, um grupo
                de elite de guerreiros dedicados a combater as forças das
                trevas.
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Durante anos, Thorne viajou pelo reino, construindo sua
                reputação como um implacável caçador de monstros e defensor dos
                fracos. Sua espada, Cinzabrasa, foi forjada nas chamas mágicas
                do Monte Drakon, e dizem que sua lâmina é capaz de cortar
                através de qualquer armadura.
              </p>
              <h4 className="text-xl font-bold text-amber-400 mb-4 mt-6">
                Personalidade
              </h4>
              <p className="text-gray-200 mb-4 leading-relaxed">
                Thorne é conhecido por sua lealdade inabalável e senso de
                justiça. Embora sério na maioria das vezes, possui um senso de
                humor seco que emerge entre amigos próximos. Sua determinação
                ferrenha o torna um aliado valioso e um inimigo temível.
              </p>
              <div className="mt-6 flex space-x-3">
                <span className="px-3 py-1 bg-indigo-800 text-indigo-200 rounded-full text-xs uppercase tracking-wider">
                  Corajoso
                </span>
                <span className="px-3 py-1 bg-indigo-800 text-indigo-200 rounded-full text-xs uppercase tracking-wider">
                  Honrado
                </span>
                <span className="px-3 py-1 bg-indigo-800 text-indigo-200 rounded-full text-xs uppercase tracking-wider">
                  Leal
                </span>
                <span className="px-3 py-1 bg-indigo-800 text-indigo-200 rounded-full text-xs uppercase tracking-wider">
                  Determinado
                </span>
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
                Vencedor do grande torneio do reino, ganhando reconhecimento
                real.
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-70 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 hover:shadow-lg hover:shadow-purple-700/30 transition-all transform hover:scale-105">
              <div className="flex items-center mb-2">
                <span className="material-symbols-outlined text-3xl text-amber-500 mr-2">
                  swords
                </span>
                <h5 className="text-white font-bold">
                  Libertador de Eastwatch
                </h5>
              </div>
              <p className="text-gray-300 text-sm">
                Liderou a resistência que libertou a cidade de Eastwatch dos
                invasores do norte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledMain>
  );
};

export default HomeMain;
