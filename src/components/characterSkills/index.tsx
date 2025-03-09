

import "./style.css";

export const CharacterSkills = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1200px] h-[800px] bg-gradient-to-br from-purple-900 to-indigo-900 font-fantasy p-8 relative overflow-hidden">
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
                  <button className="flex items-center w-full p-3 rounded-lg text-white bg-amber-600 hover:bg-amber-500 transition-colors duration-300 group">
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
                  fitness_center
                </span>
                Árvore de Habilidades
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-amber-400 text-2xl mr-2">
                      psychology
                    </span>
                    <h3 className="text-xl font-bold text-amber-400">
                      Status de Combate
                    </h3>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-300">Pontos de Habilidade:</span>
                    <span className="text-white font-medium ml-1">
                      3 disponíveis
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-amber-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Força</span>
                      <span className="text-amber-300 font-bold text-xl">
                        16
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>Bônus de Ataque</span>
                        <span>+3</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full w-[70%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-amber-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Destreza</span>
                      <span className="text-amber-300 font-bold text-xl">
                        14
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>Bônus de CA</span>
                        <span>+2</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-amber-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        Constituição
                      </span>
                      <span className="text-amber-300 font-bold text-xl">
                        15
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>Bônus de HP por nível</span>
                        <span>+2</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-amber-500 h-1.5 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-indigo-800 bg-opacity-30 rounded-lg p-3 mb-1">
                  <div className="text-white font-medium">Arma Principal:</div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-amber-500 mr-2">
                      swords
                    </span>
                    <span className="text-white font-medium">
                      Espada Larga de Aço Élfico (+2)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-indigo-700 pb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    fitness_center
                  </span>
                  Habilidades por Nível
                </h3>

                <div className="flex mb-4 gap-2">
                  <button className="text-white text-sm py-1 px-3 bg-amber-600 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                    Todos
                  </button>
                  <button className="text-white text-sm py-1 px-3 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    Básico (1-3)
                  </button>
                  <button className="text-white text-sm py-1 px-3 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    Intermediário (4-6)
                  </button>
                  <button className="text-white text-sm py-1 px-3 bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    Avançado (7-9)
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <details
                    className="group bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 hover:border-amber-500 transition-colors duration-300"
                    open
                  >
                    <summary className="flex justify-between items-center p-3 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mr-3 text-xs text-white font-bold border border-amber-600">
                          1
                        </div>
                        <h4 className="font-bold text-amber-400">
                          Habilidades Básicas
                        </h4>
                      </div>
                      <span className="material-symbols-outlined text-amber-400 group-hover:rotate-180 transition-transform duration-300">
                        expand_more
                      </span>
                    </summary>
                    <div className="p-3 pt-0 border-t border-indigo-700 mt-1">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              swords
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Golpe Preciso
                              </span>
                              <p className="text-xs text-indigo-300">
                                Ataque Básico - Nível 1
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Golpe Preciso
                            </h4>
                            <p className="text-sm mb-2">
                              Um ataque preciso que concede +2 na jogada de
                              ataque e causa 1d8 + modificador de força de dano.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Ação padrão
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 2
                            </p>
                            <p className="text-xs text-amber-300">
                              Recarga: Imediata
                            </p>
                          </div>
                        </div>

                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              shield
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Postura Defensiva
                              </span>
                              <p className="text-xs text-indigo-300">
                                Defesa Básica - Nível 1
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Postura Defensiva
                            </h4>
                            <p className="text-sm mb-2">
                              Assume uma postura defensiva, aumentando sua CA em
                              +2 por 1 minuto.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Ação de movimento
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 3
                            </p>
                            <p className="text-xs text-amber-300">
                              Duração: 1 minuto
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details
                    className="group bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 hover:border-amber-500 transition-colors duration-300"
                    open
                  >
                    <summary className="flex justify-between items-center p-3 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mr-3 text-xs text-white font-bold border border-amber-600">
                          3
                        </div>
                        <h4 className="font-bold text-amber-400">Floreios</h4>
                      </div>
                      <span className="material-symbols-outlined text-amber-400 group-hover:rotate-180 transition-transform duration-300">
                        expand_more
                      </span>
                    </summary>
                    <div className="p-3 pt-0 border-t border-indigo-700 mt-1">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              cyclone
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Golpe Giratório
                              </span>
                              <p className="text-xs text-indigo-300">
                                Floreio - Nível 3
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Golpe Giratório
                            </h4>
                            <p className="text-sm mb-2">
                              Gira a arma em um movimento circular, atingindo
                              todos os inimigos em um raio de 1,5 metros com 2d6
                              + modificador de força de dano.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Ação padrão
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 6
                            </p>
                            <p className="text-xs text-amber-300">
                              Recarga: 3 rodadas
                            </p>
                          </div>
                        </div>

                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              back_hand
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Parada Rápida
                              </span>
                              <p className="text-xs text-indigo-300">
                                Floreio - Nível 3
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Parada Rápida
                            </h4>
                            <p className="text-sm mb-2">
                              Reação que permite bloquear um ataque
                              corpo-a-corpo, reduzindo o dano pela metade.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Reação
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 4
                            </p>
                            <p className="text-xs text-amber-300">
                              Recarga: 2 rodadas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details
                    className="group bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 hover:border-amber-500 transition-colors duration-300"
                    open
                  >
                    <summary className="flex justify-between items-center p-3 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mr-3 text-xs text-white font-bold border border-amber-600">
                          5
                        </div>
                        <h4 className="font-bold text-amber-400">Avanços</h4>
                      </div>
                      <span className="material-symbols-outlined text-amber-400 group-hover:rotate-180 transition-transform duration-300">
                        expand_more
                      </span>
                    </summary>
                    <div className="p-3 pt-0 border-t border-indigo-700 mt-1">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              double_arrow
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Investida Poderosa
                              </span>
                              <p className="text-xs text-indigo-300">
                                Avanço - Nível 5
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Investida Poderosa
                            </h4>
                            <p className="text-sm mb-2">
                              Avança rapidamente em direção a um inimigo a até 6
                              metros de distância e desfere um golpe poderoso
                              causando 3d6 + modificador de força de dano.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Ação completa
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 8
                            </p>
                            <p className="text-xs text-amber-300">
                              Recarga: 4 rodadas
                            </p>
                          </div>
                        </div>

                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              bolt
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Ataque Relâmpago
                              </span>
                              <p className="text-xs text-indigo-300">
                                Avanço - Nível 5
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                          <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                            <h4 className="font-bold text-amber-400 border-b border-gray-700 pb-1 mb-2">
                              Ataque Relâmpago
                            </h4>
                            <p className="text-sm mb-2">
                              Realiza dois ataques rápidos contra um único alvo
                              com -2 de penalidade na jogada de ataque. Cada
                              ataque causa 1d8 + modificador de força de dano.
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Tipo: Ação padrão
                            </p>
                            <p className="text-xs text-amber-300 mb-1">
                              Custo de Energia: 5
                            </p>
                            <p className="text-xs text-amber-300">
                              Recarga: 2 rodadas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>

                  <details
                    className="group bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-700 hover:border-amber-500 transition-colors duration-300"
                    open
                  >
                    <summary className="flex justify-between items-center p-3 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mr-3 text-xs text-white font-bold border border-amber-600">
                          7
                        </div>
                        <h4 className="font-bold text-amber-400">
                          Técnicas Superiores
                        </h4>
                      </div>
                      <span className="material-symbols-outlined text-amber-400 group-hover:rotate-180 transition-transform duration-300">
                        expand_more
                      </span>
                    </summary>
                    <div className="p-3 pt-0 border-t border-indigo-700 mt-1">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="group relative p-3 bg-indigo-900 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-amber-500 hover:bg-indigo-900 hover:bg-opacity-50 transition-all flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="material-symbols-outlined text-amber-400 mr-3 group-hover:rotate-12 transition-transform">
                              emergency
                            </span>
                            <div>
                              <span className="text-white font-medium">
                                Golpe Destruidor
                              </span>
                              <p className="text-xs text-indigo-300">
                                Técnica Superior - Nível 7
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white text-sm bg-green-700 rounded-full px-2 py-0.5">
                              Ativo
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default CharacterSkills