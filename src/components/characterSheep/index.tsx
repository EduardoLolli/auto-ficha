import "./style.css"
const CharacterSheep = () => {
  return (
    <div id="webcrumbs">
      <div className=" h-[800px] bg-gradient-to-br from-purple-900 to-indigo-900 font-fantasy p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>

        <header className="relative z-10 flex justify-between items-center mb-8">
          <div className="flex items-center">
            <svg
              className="w-12 h-12 mr-4 text-amber-500 transform hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm6 15.5l-6 3-6-3V6.5l6-3 6 3v11z" />
              <path d="M12 6.5l-4 2v5l4 2 4-2v-5l-4-2zm2 6.3l-2 1-2-1V9.2l2-1 2 1v3.6z" />
            </svg>
            <h1 className="text-4xl font-bold tracking-wider text-white hover:text-amber-400 transition-colors duration-300">
              MysticRealms
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
              <span className="material-symbols-outlined text-3xl">
                settings
              </span>
            </button>
            <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
              <span className="material-symbols-outlined text-3xl">help</span>
            </button>
            <button className="text-white hover:text-amber-400 transition-colors duration-300 transform hover:scale-110">
              <span className="material-symbols-outlined text-3xl">logout</span>
            </button>
          </div>
        </header>

        <main className="relative z-10 flex h-[600px]">
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
                  <button className="flex items-center w-full p-3 rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 group">
                    <span className="material-symbols-outlined mr-3 group-hover:rotate-12 transition-transform">
                      description
                    </span>
                    <span className="font-medium">Biografia</span>
                  </button>
                </li>
                <li className="my-1">
                  <button className="flex items-center w-full p-3 rounded-lg text-white bg-amber-600 hover:bg-amber-500 transition-colors duration-300 group">
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
                    <span className="text-indigo-200 font-medium">
                      Guerreiro
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Nível:</span>
                    <span className="text-indigo-200 font-medium">9</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Tendência:</span>
                    <span className="text-indigo-200 font-medium">
                      Neutro Bom
                    </span>
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
                    <span className="text-indigo-200 font-medium">
                      Masculino
                    </span>
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
                      <span className="text-xs text-gray-300">
                        Deslocamento
                      </span>
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
                        <span className="text-xs text-gray-300 block">
                          Ataque
                        </span>
                        <span className="text-white font-bold">+15</span>
                      </div>
                      <div className="text-center border-r border-indigo-700">
                        <span className="text-xs text-gray-300 block">
                          Dano
                        </span>
                        <span className="text-white font-bold">1d8+6</span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-gray-300 block">
                          Crítico
                        </span>
                        <span className="text-white font-bold">19-20/x2</span>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-amber-300">
                      <span className="font-semibold">Especial:</span> Causa
                      +1d6 de dano de fogo
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
                        <span className="text-xs text-gray-300 block">
                          Ataque
                        </span>
                        <span className="text-white font-bold">+11</span>
                      </div>
                      <div className="text-center border-r border-indigo-700">
                        <span className="text-xs text-gray-300 block">
                          Dano
                        </span>
                        <span className="text-white font-bold">1d8+4</span>
                      </div>
                      <div className="text-center border-r border-indigo-700">
                        <span className="text-xs text-gray-300 block">
                          Crítico
                        </span>
                        <span className="text-white font-bold">x3</span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-gray-300 block">
                          Alcance
                        </span>
                        <span className="text-white font-bold">30m</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-800 bg-opacity-40 rounded border border-indigo-600 hover:border-amber-500 hover:shadow-amber-500/10 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-white">
                        Adaga
                      </h4>
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
                        <span className="text-xs text-gray-300 block">
                          Ataque
                        </span>
                        <span className="text-white font-bold">+13</span>
                      </div>
                      <div className="text-center border-r border-indigo-700">
                        <span className="text-xs text-gray-300 block">
                          Dano
                        </span>
                        <span className="text-white font-bold">1d4+4</span>
                      </div>
                      <div className="text-center border-r border-indigo-700">
                        <span className="text-xs text-gray-300 block">
                          Crítico
                        </span>
                        <span className="text-white font-bold">19-20/x2</span>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-gray-300 block">
                          Alcance
                        </span>
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
                      <div className="text-xs text-indigo-300">
                        Armadura Pesada
                      </div>
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
                      <div className="text-xs text-indigo-300">
                        Escudo Pesado
                      </div>
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
      </div>
    </div>
  );
};

export default CharacterSheep;
