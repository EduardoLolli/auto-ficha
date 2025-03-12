import "./style.css";
const CharacterSheep = () => {
  return (
    <main className="relative z-10 flex h-[600px]">
      <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-lg border-2 border-indigo-700 p-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-amber-500 pb-2 flex items-center">
            <span className="material-symbols-outlined mr-3 text-amber-500">
              person
            </span>
            Ficha do Personagem
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2">
              Informações Básicas
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Nome:</span>
                <span className="text-indigo-200 font-medium">Thorne</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Raça:</span>
                <span className="text-indigo-200 font-medium">Humano</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Classe:</span>
                <span className="text-indigo-200 font-medium">Guerreiro</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Nível:</span>
                <span className="text-indigo-200 font-medium">9</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Tendência:</span>
                <span className="text-indigo-200 font-medium">Neutro Bom</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Divindade:</span>
                <span className="text-indigo-200 font-medium">Tyr</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Tamanho:</span>
                <span className="text-indigo-200 font-medium">Médio</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Idade:</span>
                <span className="text-indigo-200 font-medium">32 anos</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Gênero:</span>
                <span className="text-indigo-200 font-medium">Masculino</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Altura:</span>
                <span className="text-indigo-200 font-medium">1,85m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Peso:</span>
                <span className="text-indigo-200 font-medium">90kg</span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2">
              Atributos
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Força
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">18</span>
                  <span className="text-green-400 ml-1">(+4)</span>
                </div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Destreza
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">14</span>
                  <span className="text-green-400 ml-1">(+2)</span>
                </div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Constituição
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">16</span>
                  <span className="text-green-400 ml-1">(+3)</span>
                </div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Inteligência
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">12</span>
                  <span className="text-green-400 ml-1">(+1)</span>
                </div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Sabedoria
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">13</span>
                  <span className="text-green-400 ml-1">(+1)</span>
                </div>
              </div>
              <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/20 hover:shadow-inner transition-all">
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Carisma
                </span>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">10</span>
                  <span className="text-gray-400 ml-1">(+0)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2">
              Status
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Pontos de Vida</span>
                  <span className="text-white">84/84</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-red-700 to-red-500 h-3 rounded-full w-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">CA Total</span>
                  <div className="text-2xl font-bold text-white">19</div>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">Iniciativa</span>
                  <div className="text-2xl font-bold text-white">+2</div>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">Deslocamento</span>
                  <div className="text-2xl font-bold text-white">9m</div>
                </div>
                <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                  <span className="text-xs text-gray-300">BBA</span>
                  <div className="text-2xl font-bold text-white">+9</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-amber-400 text-sm font-semibold mb-2">
                  Testes de Resistência
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                    <span className="text-xs text-gray-300">Fortitude</span>
                    <div className="text-xl font-bold text-white">+9</div>
                  </div>
                  <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                    <span className="text-xs text-gray-300">Reflexos</span>
                    <div className="text-xl font-bold text-white">+5</div>
                  </div>
                  <div className="bg-indigo-800 bg-opacity-50 rounded p-2 text-center border border-indigo-600 hover:border-amber-500 transition-all">
                    <span className="text-xs text-gray-300">Vontade</span>
                    <div className="text-xl font-bold text-white">+4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2 flex items-center">
              <span className="material-symbols-outlined mr-2">
                fitness_center
              </span>
              Perícias
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Acrobacia</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">DES</span>
                  <span className="text-white font-bold ml-2">+5</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Atletismo</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">FOR</span>
                  <span className="text-white font-bold ml-2">+11</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Cavalgar</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">DES</span>
                  <span className="text-white font-bold ml-2">+7</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Conhecimento (Nobreza)</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">INT</span>
                  <span className="text-white font-bold ml-2">+5</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Intimidação</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">CAR</span>
                  <span className="text-white font-bold ml-2">+6</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Percepção</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">SAB</span>
                  <span className="text-white font-bold ml-2">+8</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-800 bg-opacity-40 rounded hover:bg-indigo-800 hover:bg-opacity-60 transition-colors">
                <span className="text-white">Sobrevivência</span>
                <div className="flex items-center">
                  <span className="text-indigo-200">SAB</span>
                  <span className="text-white font-bold ml-2">+6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2 flex items-center">
              <span className="material-symbols-outlined mr-2">swords</span>
              Ataques e Armas
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-800 bg-opacity-40 rounded border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/10 hover:shadow-md transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-white">
                    Cinzabrasa{" "}
                    <span className="text-xs text-indigo-300">
                      (Espada Longa +2)
                    </span>
                  </h4>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-amber-700 text-amber-100 text-xs rounded">
                      Corpo-a-corpo
                    </span>
                    <span className="px-2 py-1 bg-indigo-700 text-indigo-100 text-xs rounded">
                      Mágica
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Ataque</span>
                    <span className="text-white font-bold">+15</span>
                  </div>
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Dano</span>
                    <span className="text-white font-bold">1d8+6</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-300 block">Crítico</span>
                    <span className="text-white font-bold">19-20/x2</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-amber-300">
                  <span className="font-semibold">Especial:</span> Causa +1d6 de
                  dano de fogo
                </div>
              </div>

              <div className="p-3 bg-indigo-800 bg-opacity-40 rounded border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/10 hover:shadow-md transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-white">
                    Arco Longo Composto
                  </h4>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-blue-700 text-blue-100 text-xs rounded">
                      Distância
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Ataque</span>
                    <span className="text-white font-bold">+11</span>
                  </div>
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Dano</span>
                    <span className="text-white font-bold">1d8+4</span>
                  </div>
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Crítico</span>
                    <span className="text-white font-bold">x3</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-300 block">Alcance</span>
                    <span className="text-white font-bold">30m</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-indigo-800 bg-opacity-40 rounded border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/10 hover:shadow-md transition-all">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold text-white">Adaga</h4>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-amber-700 text-amber-100 text-xs rounded">
                      Corpo-a-corpo
                    </span>
                    <span className="px-2 py-1 bg-blue-700 text-blue-100 text-xs rounded">
                      Arremesso
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Ataque</span>
                    <span className="text-white font-bold">+13</span>
                  </div>
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Dano</span>
                    <span className="text-white font-bold">1d4+4</span>
                  </div>
                  <div className="text-center border-r border-indigo-700">
                    <span className="text-xs text-gray-300 block">Crítico</span>
                    <span className="text-white font-bold">19-20/x2</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-300 block">Alcance</span>
                    <span className="text-white font-bold">6m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-amber-400 mb-3 border-b border-indigo-700 pb-2 flex items-center">
              <span className="material-symbols-outlined mr-2">shield</span>
              Equipamentos e Proteções
            </h3>
            <div className="space-y-2">
              <div className="p-2 bg-indigo-800 bg-opacity-40 rounded flex justify-between items-center hover:bg-indigo-800 transition-colors">
                <div>
                  <span className="text-white font-medium">
                    Brunea de Placas +1
                  </span>
                  <div className="text-xs text-indigo-300">Armadura Pesada</div>
                </div>
                <div className="text-right">
                  <span className="text-white font-medium">CA +9</span>
                  <div className="text-xs text-indigo-300">
                    Pen. -5, Max Des +1
                  </div>
                </div>
              </div>

              <div className="p-2 bg-indigo-800 bg-opacity-40 rounded flex justify-between items-center hover:bg-indigo-800 transition-colors">
                <div>
                  <span className="text-white font-medium">
                    Escudo de Aço +1
                  </span>
                  <div className="text-xs text-indigo-300">Escudo Pesado</div>
                </div>
                <div className="text-right">
                  <span className="text-white font-medium">CA +3</span>
                  <div className="text-xs text-indigo-300">Pen. -2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterSheep;
