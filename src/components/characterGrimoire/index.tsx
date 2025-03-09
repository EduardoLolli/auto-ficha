import "./style.css"

const CharacterGrimoire = () => {
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
                  <button className="flex items-center w-full p-3 rounded-lg text-white bg-amber-600 hover:bg-amber-500 transition-colors duration-300 group">
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
                  auto_fix_high
                </span>
                Grimório de Feitiços
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-purple-400 text-2xl mr-2">
                      psychology
                    </span>
                    <h3 className="text-xl font-bold text-purple-400">
                      Status Mágico
                    </h3>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-300">Slots de Feitiço:</span>
                    <span className="text-white font-medium ml-1">
                      4/6 disponíveis
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        Inteligência
                      </span>
                      <span className="text-purple-300 font-bold text-xl">
                        15
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>Bônus de Conjuração</span>
                        <span>+2</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        Potência Mágica
                      </span>
                      <span className="text-purple-300 font-bold text-xl">
                        37/100
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>CD do Feitiço</span>
                        <span>14</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full w-[37%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-indigo-800 bg-opacity-50 rounded-lg p-3 border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 transition-all h-24">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        Energia Arcana
                      </span>
                      <span className="text-blue-300 font-bold text-xl">
                        65/70
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-indigo-100 mb-1">
                        <span>Recuperação por descanso</span>
                        <span>+10</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full w-[92%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-indigo-800 bg-opacity-30 rounded-lg p-3 mb-1">
                  <div className="text-white font-medium">Foco Arcano:</div>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-amber-500 mr-2">
                      auto_awesome
                    </span>
                    <span className="text-white font-medium">
                      Cajado de Carvalho Antigo (+1)
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-indigo-700 pb-2 flex items-center">
                  <span className="material-symbols-outlined mr-2">
                    auto_fix_high
                  </span>
                  Feitiços Preparados
                </h3>

                <div className="flex mb-4 bg-indigo-800 bg-opacity-40 p-2 rounded-lg">
                  <div className="text-white text-sm flex items-center mr-2">
                    <span className="material-symbols-outlined text-purple-400 mr-1">
                      bolt
                    </span>
                    <span>Slots utilizados:</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-5 h-5 rounded-md bg-purple-500 border border-purple-400"></div>
                    <div className="w-5 h-5 rounded-md bg-purple-500 border border-purple-400"></div>
                    <div className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600"></div>
                    <div className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600"></div>
                    <div className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600"></div>
                    <div className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="group relative p-3 bg-purple-800 bg-opacity-40 rounded-lg border border-purple-600 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-purple-400 mr-3 group-hover:rotate-12 transition-transform">
                        local_fire_department
                      </span>
                      <div>
                        <span className="text-white font-medium">
                          Dardo de Fogo
                        </span>
                        <p className="text-xs text-indigo-300">
                          Evocação - Nível 1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm bg-indigo-700 rounded-full px-2 py-0.5">
                        Ativo
                      </span>
                      <button className="text-white bg-red-700 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-purple-400 border-b border-gray-700 pb-1 mb-2">
                        Dardo de Fogo
                      </h4>
                      <p className="text-sm mb-2">
                        Você lança um projétil de fogo que causa 1d10 de dano.
                        Para cada slot adicional, você pode criar um dardo
                        extra.
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Alcance: 36 metros
                      </p>
                      <p className="text-xs text-purple-300">
                        Componentes: V, S
                      </p>
                    </div>
                  </div>

                  <div className="group relative p-3 bg-purple-800 bg-opacity-40 rounded-lg border border-purple-600 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-purple-400 mr-3 group-hover:rotate-12 transition-transform">
                        shield
                      </span>
                      <div>
                        <span className="text-white font-medium">
                          Armadura Arcana
                        </span>
                        <p className="text-xs text-indigo-300">
                          Abjuração - Nível 1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm bg-indigo-700 rounded-full px-2 py-0.5">
                        Ativo
                      </span>
                      <button className="text-white bg-red-700 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">
                          close
                        </span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-purple-400 border-b border-gray-700 pb-1 mb-2">
                        Armadura Arcana
                      </h4>
                      <p className="text-sm mb-2">
                        Um campo de força protetora envolve você, garantindo +3
                        na CA pelo resto do dia.
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Duração: 8 horas
                      </p>
                      <p className="text-xs text-purple-300">
                        Componentes: V, S, M (um pedaço de couro curtido)
                      </p>
                    </div>
                  </div>

                  <div className="group relative p-3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 hover:bg-opacity-50 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined text-blue-400 mr-3 group-hover:rotate-12 transition-transform">
                        wb_twilight
                      </span>
                      <div>
                        <span className="text-white font-medium">Luz</span>
                        <p className="text-xs text-indigo-300">
                          Evocação - Truque
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-white bg-green-700 hover:bg-green-600 rounded px-3 py-1 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">
                          add
                        </span>
                        <span className="text-sm">Preparar</span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-blue-400 border-b border-gray-700 pb-1 mb-2">
                        Luz
                      </h4>
                      <p className="text-sm mb-2">
                        Você toca um objeto que não tenha mais de 3 metros em
                        qualquer dimensão, fazendo-o emitir luz brilhante em um
                        raio de 6 metros.
                      </p>
                      <p className="text-xs text-blue-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-blue-300 mb-1">
                        Duração: 1 hora
                      </p>
                      <p className="text-xs text-blue-300">
                        Componentes: V, M (um vaga-lume ou musgo fosforescente)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900 bg-opacity-60 rounded-lg p-4 border border-indigo-700 hover:border-amber-500 transition-colors duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-amber-400 flex items-center">
                    <span className="material-symbols-outlined mr-2">
                      menu_book
                    </span>
                    Grimório Completo
                  </h3>

                  <div className="flex items-center">
                    <div className="relative mr-2">
                      <input
                        type="text"
                        placeholder="Buscar feitiço..."
                        className="pl-8 pr-4 py-1 rounded-full bg-indigo-800 border border-indigo-600 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-48"
                      />
                      <span className="material-symbols-outlined absolute left-2 top-1 text-indigo-400">
                        search
                      </span>
                    </div>

                    <details className="relative group">
                      <summary className="flex items-center bg-indigo-800 hover:bg-indigo-700 rounded-full px-3 py-1 text-white cursor-pointer focus:outline-none">
                        <span className="material-symbols-outlined text-sm mr-1">
                          filter_alt
                        </span>
                        <span className="text-sm">Filtros</span>
                      </summary>
                      <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-indigo-700 rounded-lg shadow-lg z-10 p-3">
                        <div className="mb-2">
                          <p className="text-xs text-gray-400 mb-1">
                            Nível do Feitiço
                          </p>
                          <div className="flex flex-wrap gap-1">
                            <button className="w-7 h-7 rounded-full bg-indigo-700 text-white hover:bg-purple-600 transition-colors text-xs">
                              T
                            </button>
                            <button className="w-7 h-7 rounded-full bg-indigo-700 text-white hover:bg-purple-600 transition-colors text-xs">
                              1
                            </button>
                            <button className="w-7 h-7 rounded-full bg-indigo-700 text-white hover:bg-purple-600 transition-colors text-xs">
                              2
                            </button>
                            <button className="w-7 h-7 rounded-full bg-indigo-700 text-white hover:bg-purple-600 transition-colors text-xs">
                              3
                            </button>
                          </div>
                        </div>
                        <div className="mb-2">
                          <p className="text-xs text-gray-400 mb-1">
                            Escola de Magia
                          </p>
                          <select className="w-full bg-indigo-800 border border-indigo-600 rounded p-1 text-white text-sm">
                            <option>Todas</option>
                            <option>Abjuração</option>
                            <option>Adivinhação</option>
                            <option>Encantamento</option>
                            <option>Evocação</option>
                            <option>Ilusão</option>
                            <option>Necromancia</option>
                            <option>Transmutação</option>
                          </select>
                        </div>
                        <div className="flex justify-end">
                          <button className="text-xs bg-purple-700 hover:bg-purple-600 text-white px-2 py-1 rounded">
                            Aplicar
                          </button>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="group relative p-3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 hover:bg-opacity-50 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center mr-3 text-xs text-white font-bold border border-purple-600">
                        T
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Prestidigitação
                        </span>
                        <p className="text-xs text-indigo-300">
                          Transmutação - Truque
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-white bg-green-700 hover:bg-green-600 rounded px-3 py-1 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">
                          add
                        </span>
                        <span className="text-sm">Preparar</span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-purple-400 border-b border-gray-700 pb-1 mb-2">
                        Prestidigitação
                      </h4>
                      <p className="text-sm mb-2">
                        Você cria um efeito mágico menor como colorir ou limpar
                        um objeto, criar um sensação sensorial inofensiva,
                        acender ou apagar uma vela, etc.
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Duração: Até 1 hora
                      </p>
                      <p className="text-xs text-purple-300">
                        Componentes: V, S
                      </p>
                    </div>
                  </div>

                  <div className="group relative p-3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 hover:bg-opacity-50 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center mr-3 text-xs text-white font-bold border border-purple-600">
                        T
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Mãos Mágicas
                        </span>
                        <p className="text-xs text-indigo-300">
                          Conjuração - Truque
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-white bg-green-700 hover:bg-green-600 rounded px-3 py-1 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">
                          add
                        </span>
                        <span className="text-sm">Preparar</span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-purple-400 border-b border-gray-700 pb-1 mb-2">
                        Mãos Mágicas
                      </h4>
                      <p className="text-sm mb-2">
                        Uma mão espectral flutuante aparece num ponto à sua
                        escolha dentro do alcance. A mão dura pela duração ou
                        até você dissipá-la.
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Duração: 1 minuto
                      </p>
                      <p className="text-xs text-purple-300">
                        Componentes: V, S
                      </p>
                    </div>
                  </div>

                  <div className="group relative p-3 bg-indigo-800 bg-opacity-40 rounded-lg border border-indigo-600 hover:border-purple-500 hover:bg-indigo-800 hover:bg-opacity-50 transition-all flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center mr-3 text-xs text-white font-bold border border-purple-600">
                        1
                      </div>
                      <div>
                        <span className="text-white font-medium">
                          Imagem Silenciosa
                        </span>
                        <p className="text-xs text-indigo-300">
                          Ilusão - Nível 1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-white bg-green-700 hover:bg-green-600 rounded px-3 py-1 flex items-center">
                        <span className="material-symbols-outlined text-sm mr-1">
                          add
                        </span>
                        <span className="text-sm">Preparar</span>
                      </button>
                    </div>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-95 text-white p-3 rounded-lg shadow-lg w-64 right-0 top-full mt-2 z-10 pointer-events-none">
                      <h4 className="font-bold text-purple-400 border-b border-gray-700 pb-1 mb-2">
                        Imagem Silenciosa
                      </h4>
                      <p className="text-sm mb-2">
                        Você cria a imagem ilusória de um objeto, uma criatura
                        ou algum outro fenômeno visível que não seja maior que
                        um cubo de 4,5 metros.
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Tempo de Conjuração: 1 ação
                      </p>
                      <p className="text-xs text-purple-300 mb-1">
                        Duração: Concentração, até 10 minutos
                      </p>
                      <p className="text-xs text-purple-300">
                        Componentes: V, S, M (um pouco de lã)
                      </p>
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
export default CharacterGrimoire;