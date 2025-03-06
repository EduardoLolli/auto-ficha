import "./style.css";

export const HomePage = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[800px] h-[600px] bg-gradient-to-b from-amber-900 to-amber-950 font-serif p-8 overflow-auto relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.imgur.com/JQYECtG.jpg')] opacity-15 bg-cover mix-blend-overlay pointer-events-none"></div>

        <header className="text-center mb-8 relative z-10">
          <h1 className="text-4xl font-bold text-amber-300 mb-2 tracking-wider">
            Grimório de Magias
          </h1>
          <div className="w-full max-w-[600px] mx-auto space-y-2">
            <div className="text-xl text-amber-200 italic">
              <div className="flex items-center justify-center">
                <span>Compêndio de magias e encantamentos</span>
              </div>
            </div>

            <div className="bg-amber-800/30 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-amber-600/20">
              <div className="mb-4">
                <h3 className="text-amber-100 font-semibold mb-2">
                  Magias por Nível
                </h3>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                    <div
                      key={level}
                      className="bg-amber-700/30 rounded-lg p-2 text-center hover:bg-amber-600/40 transition-all cursor-pointer transform hover:scale-105"
                    >
                      <span className="text-amber-200 font-medium">
                        {level}
                      </span>
                      <div className="text-xs text-amber-100/70 mt-1">
                        {4} magias
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </header>

        <div className="space-y-6 relative z-10">
          {/* Separador de magias por nível */}
          <div className="grid grid-cols-1 gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
              <div
                key={level}
                className="bg-amber-900/40 rounded-lg border border-amber-700/30 overflow-hidden"
              >
                <div className="p-3 flex justify-between items-center bg-amber-800/50 cursor-pointer hover:bg-amber-700/50 transition-colors">
                  <h3 className="text-amber-300 font-medium flex items-center">
                    Nível {level}
                  </h3>
                  <span className="text-amber-200 text-sm">
                    {level === 0 ? "Truques" : "Magias"}
                  </span>
                </div>

                {/* Conteúdo do nível mostrando apenas para nível 3 (Bola de Fogo) e níveis 1 e 2 para os outros exemplos */}
                {level === 3 && (
                  <div className="p-2">
                    <details className="bg-amber-900/50 border-2 border-amber-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group">
                      <summary className="p-4 cursor-pointer flex justify-between items-center text-amber-200 font-medium text-xl hover:bg-amber-800/50 transition-colors duration-200">
                        <span className="flex items-center">Bola de Fogo</span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="p-4 bg-amber-950/30 text-amber-100">
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-amber-300 font-medium">
                              Escola:
                            </span>{" "}
                            Evocação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Tempo de Conjuração:
                            </span>{" "}
                            1 ação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Alcance:
                            </span>{" "}
                            150 pés
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Duração:
                            </span>{" "}
                            Instantânea
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Componentes:
                            </span>{" "}
                            V, S, M (uma pequena bola de guano de morcego e
                            enxofre)
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Nível:
                            </span>{" "}
                            3
                          </div>
                        </div>
                        <p className="mb-3">
                          Um brilhante raio de luz se estende de seu dedo
                          indicador em direção a um ponto que você escolher,
                          dentro do alcance, e então eclode com um estrondo
                          baixo, explodindo em chamas.
                        </p>
                        <p>
                          Cada criatura em uma esfera de 6 metros de raio
                          centrada no ponto deve realizar um teste de
                          resistência de Destreza. Um alvo sofre 8d6 de dano de
                          fogo se falhar no teste, ou metade desse dano se
                          obtiver sucesso.
                        </p>
                      </div>
                    </details>
                  </div>
                )}

                {level === 1 && (
                  <div className="p-2">
                    <details className="bg-amber-900/50 border-2 border-amber-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group">
                      <summary className="p-4 cursor-pointer flex justify-between items-center text-amber-200 font-medium text-xl hover:bg-amber-800/50 transition-colors duration-200">
                        <span className="flex items-center">
                          Curar Ferimentos
                        </span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="p-4 bg-amber-950/30 text-amber-100">
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-amber-300 font-medium">
                              Escola:
                            </span>{" "}
                            Evocação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Tempo de Conjuração:
                            </span>{" "}
                            1 ação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Alcance:
                            </span>{" "}
                            Toque
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Duração:
                            </span>{" "}
                            Instantânea
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Componentes:
                            </span>{" "}
                            V, S
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Nível:
                            </span>{" "}
                            1
                          </div>
                        </div>
                        <p className="mb-3">
                          Uma criatura que você tocar recupera 1d8 + seu
                          modificador de habilidade de conjuração pontos de
                          vida. Esta magia não tem efeito em mortos-vivos ou
                          constructos.
                        </p>
                        <p>
                          Em níveis superiores: Quando você conjurar esta magia
                          usando um espaço de magia de 2° nível ou superior, a
                          cura aumenta em 1d8 para cada nível do espaço acima do
                          1°.
                        </p>
                      </div>
                    </details>

                    <details className="bg-amber-900/50 border-2 border-amber-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group mt-2">
                      <summary className="p-4 cursor-pointer flex justify-between items-center text-amber-200 font-medium text-xl hover:bg-amber-800/50 transition-colors duration-200">
                        <span className="flex items-center">
                          Enfeitiçar Pessoa
                        </span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="p-4 bg-amber-950/30 text-amber-100">
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-amber-300 font-medium">
                              Escola:
                            </span>{" "}
                            Encantamento
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Tempo de Conjuração:
                            </span>{" "}
                            1 ação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Alcance:
                            </span>{" "}
                            30 pés
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Duração:
                            </span>{" "}
                            1 hora
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Componentes:
                            </span>{" "}
                            V, S
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Nível:
                            </span>{" "}
                            1
                          </div>
                        </div>
                        <p className="mb-3">
                          Você tenta enfeitiçar um humanoide que você possa ver
                          dentro do alcance. Ele deve realizar um teste de
                          resistência de Sabedoria, e o faz com vantagem se você
                          ou seus companheiros estiverem lutando contra ele.
                        </p>
                        <p>
                          Se falhar, ele fica enfeitiçado por você até a magia
                          acabar ou até você ou seus companheiros fizerem
                          qualquer coisa nociva contra ele. A criatura
                          enfeitiçada considera você como um amigo.
                        </p>
                      </div>
                    </details>
                  </div>
                )}

                {level === 2 && (
                  <div className="p-2">
                    <details className="bg-amber-900/50 border-2 border-amber-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group">
                      <summary className="p-4 cursor-pointer flex justify-between items-center text-amber-200 font-medium text-xl hover:bg-amber-800/50 transition-colors duration-200">
                        <span className="flex items-center">
                          Invisibilidade
                        </span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="p-4 bg-amber-950/30 text-amber-100">
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-amber-300 font-medium">
                              Escola:
                            </span>{" "}
                            Ilusão
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Tempo de Conjuração:
                            </span>{" "}
                            1 ação
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Alcance:
                            </span>{" "}
                            Toque
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Duração:
                            </span>{" "}
                            Concentração, até 1 hora
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Componentes:
                            </span>{" "}
                            V, S, M (uma pestana envolta em goma-arábica)
                          </div>
                          <div>
                            <span className="text-amber-300 font-medium">
                              Nível:
                            </span>{" "}
                            2
                          </div>
                        </div>
                        <p className="mb-3">
                          Uma criatura que você tocar se torna invisível até a
                          magia acabar. Qualquer coisa que o alvo estiver
                          vestindo ou carregando fica invisível enquanto estiver
                          de posse do alvo.
                        </p>
                        <p>
                          A magia termina para o alvo caso ele ataque ou conjure
                          uma magia.
                        </p>
                      </div>
                    </details>
                  </div>
                )}

                {level !== 1 && level !== 2 && level !== 3 && (
                  <div className="p-4 text-center text-amber-200/70 italic">
                    Nenhuma magia deste nível no grimório
                    <button className="block w-full mt-2 text-amber-300 hover:text-amber-200 text-sm underline transition-colors">
                      Adicionar magia de nível {level}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
