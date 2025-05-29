import axios from "axios";
import React from "react";

type ClassType = { id: number; name: string };
type AncestriesType = { id: number; name: string };

export const CharacterCreation = () => {
  const [classes, setClasses] = React.useState<ClassType[]>([]);
  const [ancestries, setAncestries] = React.useState<AncestriesType[]>([]);

  React.useEffect(() => {
    const getInfos = () => {
      axios
        .get("http://af-laravel-api.test/api/classes/find")
        .then((response) => {
          const fetchedClasses: ClassType[] = response.data.data;
          setClasses(fetchedClasses);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get("http://af-laravel-api.test/api/ancestries/find")
        .then((response) => {
          const fetchedAncestries: AncestriesType[] = response.data.data;
          setAncestries(fetchedAncestries);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getInfos();
  }, []);

  return (
    <div id="webcrumbs">
      <div className="w-[1200px] p-8 bg-gradient-to-br from-violet-50 to-blue-50 font-sans">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-violet-800 mb-2">
            Criação de Personagem
          </h1>
          <p className="text-lg text-gray-600">
            Crie seu herói e embarque em uma jornada épica
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="bg-violet-100 rounded-lg p-4 h-[420px] flex flex-col">
                <h2 className="text-xl font-bold mb-4 text-violet-800">
                  Visualização do Personagem
                </h2>
                <div className="flex-grow flex justify-center items-center bg-violet-200/50 rounded-lg">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-violet-300 rounded-full flex items-center justify-center mb-4 hover:bg-violet-400 transition-all duration-300">
                      <span className="material-symbols-outlined text-5xl text-violet-700">
                        person
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold" id="character-name">
                      Nome do Personagem
                    </h3>
                    <p className="text-sm text-gray-600" id="character-details">
                      Nível 1
                    </p>
                    <p
                      className="text-sm text-gray-600"
                      id="character-class-ancestry"
                    >
                      Selecione uma classe e ancestralidade
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="char-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome do Personagem
                  </label>
                  <input
                    type="text"
                    id="char-name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
                    placeholder="Digite o nome do seu personagem"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 col-span-1">
              <div className="bg-indigo-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-indigo-800">
                  Ancestralidade
                </h2>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
                  <option value="" disabled selected>
                    Selecione uma ancestralidade
                  </option>
                  {ancestries.map((a) => (
                    <option key={a.id} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                </select>
                <div className="mt-3 text-sm text-gray-600">
                  A ancestralidade define características físicas e culturais do
                  seu personagem.
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-blue-800">Classe</h2>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                  <option value="" disabled selected>
                    Selecione uma classe
                  </option>
                  {classes.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="mt-3 text-sm text-gray-600">
                  A classe determina as habilidades especiais e o estilo de jogo
                  do seu personagem.
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-emerald-800">
                  Nível
                </h2>
                <div className="flex items-center space-x-4">
                  <button className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition-all">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="text-2xl font-bold">1</span>
                  <button className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition-all">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  Personagens começam no nível 1 e evoluem com experiência.
                </div>
              </div>
            </div>

            <div className="space-y-6 col-span-1">
              <div className="bg-amber-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-amber-800">
                  Subclasse
                </h2>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all">
                  <option value="" disabled selected>
                    Selecione uma subclasse
                  </option>
                  {classes.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="mt-3 text-sm text-gray-600">
                  A subclasse determina a especialização do seu personagem.
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-red-800">
                  Armas Iniciais
                </h2>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500 h-4 w-4 transition-all"
                    />
                    <span>Espada Curta</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500 h-4 w-4 transition-all"
                    />
                    <span>Arco Longo</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500 h-4 w-4 transition-all"
                    />
                    <span>Cajado</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500 h-4 w-4 transition-all"
                    />
                    <span>Machado de Batalha</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-red-600 focus:ring-red-500 h-4 w-4 transition-all"
                    />
                    <span>Adagas (2)</span>
                  </label>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold mb-3 text-teal-800">
                  Kit Inicial
                </h2>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all">
                  <option value="" disabled selected>
                    Selecione um kit
                  </option>
                  <option value="aventureiro">Kit do Aventureiro</option>
                  <option value="explorador">Kit do Explorador</option>
                  <option value="estudioso">Kit do Estudioso</option>
                  <option value="sacerdote">Kit do Sacerdote</option>
                  <option value="artesao">Kit do Artesão</option>
                </select>
                <div className="mt-3 text-sm text-gray-600">
                  O kit inicial inclui itens básicos para começar sua jornada.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-purple-800">
                Informações Básicas
              </h2>
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="char-age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Idade
                  </label>
                  <input
                    type="number"
                    id="char-age"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder="Idade do personagem"
                  />
                </div>
                <div>
                  <label
                    htmlFor="char-height"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    id="char-height"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder="Altura em centímetros"
                  />
                </div>
                <div>
                  <label
                    htmlFor="char-weight"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    id="char-weight"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder="Peso em quilogramas"
                  />
                </div>
                <div>
                  <label
                    htmlFor="char-gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gênero
                  </label>
                  <select
                    id="char-gender"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  >
                    <option value="" disabled selected>
                      Selecione um gênero
                    </option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-fuchsia-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-fuchsia-800">
                Atributos Iniciais
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="attr-str"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Força</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="attr-dex"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Destreza</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="attr-con"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Constituição</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="attr-int"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Inteligência</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="attr-wis"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Sabedoria</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="attr-cha"
                    className="flex justify-between text-sm font-medium text-gray-700 mb-1"
                  >
                    <span>Carisma</span>
                    <span className="text-fuchsia-600 font-bold">10</span>
                  </label>
                  <div className="flex items-center">
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <div className="w-full mx-2 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-fuchsia-600 h-2 rounded-full"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-200 transition-all">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>
                  Pontos restantes:{" "}
                  <span className="font-bold text-fuchsia-600">10</span>
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold mb-3 text-rose-800">Armadura</h2>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all mb-3">
                <option value="" disabled selected>
                  Selecione uma armadura
                </option>
                <option value="roupa">Roupa de Tecido</option>
                <option value="couro">Armadura de Couro</option>
                <option value="cota">Cota de Malha</option>
                <option value="peitoral">Peitoral de Aço</option>
                <option value="placas">Armadura de Placas</option>
              </select>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Classe de Armadura</span>
                <span className="bg-rose-200 text-rose-800 font-bold px-3 py-1 rounded-full">
                  10
                </span>
              </div>

              <div className="space-y-2 mt-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-rose-600 focus:ring-rose-500 h-4 w-4 transition-all"
                  />
                  <span>Escudo (+2 CA)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-rose-600 focus:ring-rose-500 h-4 w-4 transition-all"
                  />
                  <span>Elmo (+1 CA)</span>
                </label>
              </div>

              <div className="mt-3 text-sm text-gray-600">
                A armadura influencia sua classe de armadura e mobilidade.
              </div>
            </div>

            <div className="bg-cyan-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-2">
              <h2 className="text-xl font-bold mb-3 text-cyan-800">
                História do Personagem
              </h2>
              <textarea
                className="w-full p-3 h-32 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                placeholder="Descreva a história e as motivações do seu personagem..."
              ></textarea>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="char-homeland"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Terra Natal
                  </label>
                  <input
                    type="text"
                    id="char-homeland"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    placeholder="De onde seu personagem vem?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="char-occupation"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ocupação Anterior
                  </label>
                  <input
                    type="text"
                    id="char-occupation"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    placeholder="O que seu personagem fazia?"
                  />
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                A história do seu personagem influencia suas habilidades e
                personalidade.
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 lg:col-span-1">
              <h2 className="text-xl font-bold mb-3 text-yellow-800">
                Divindade
              </h2>
              <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all mb-3">
                <option value="" disabled selected>
                  Selecione uma divindade
                </option>
                <option value="solaris">Solaris, Deus do Sol</option>
                <option value="lunaris">Lunaris, Deusa da Lua</option>
                <option value="thoros">Thoros, Deus da Guerra</option>
                <option value="sylvana">Sylvana, Deusa da Natureza</option>
                <option value="marinus">Marinus, Deus dos Oceanos</option>
                <option value="chronos">Chronos, Deus do Tempo</option>
                <option value="nenhum">Nenhuma Divindade</option>
              </select>

              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-yellow-600 mr-2">
                    water_drop
                  </span>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all">
                    <option value="" disabled selected>
                      Nível de Devoção
                    </option>
                    <option value="devoto">Devoto Fervoroso</option>
                    <option value="seguidor">Seguidor Fiel</option>
                    <option value="simpatizante">Simpatizante</option>
                    <option value="casual">Relação Casual</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 bg-yellow-100 p-3 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Sua divindade pode conceder poderes e bênçãos especiais,
                  dependendo da sua classe e nível de devoção.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-500/50">
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">savings</span>
                Criar Personagem
              </span>
            </button>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>Crie seu personagem e comece sua aventura hoje!</p>
        </footer>
      </div>
    </div>
  );
};
