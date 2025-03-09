import CharacterSeleCard from "../characterSeleCard";
import "./style.css";

const personagens = [
  {
    name: "Eldrin",
    class: "Mago",
    level: 8,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "auto_fix_high",
  },
  {
    name: "Thorne",
    class: "Guerreiro",
    level: 9,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "shield",
  },
  {
    name: "Lyra",
    class: "Arqueira",
    level: 7,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "arrow_outward",
  },
  {
    name: "Grimm",
    class: "Bárbaro",
    level: 8,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "fitness_center",
  },
  {
    name: "Seraphina",
    class: "Sacerdotisa",
    level: 6,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "psychiatry",
  },
  {
    name: "Raven",
    class: "Ladina",
    level: 7,
    image:
      "https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg",
    icon: "vpn_key",
  },
];

const CharacterSelection = () => {
  return (
    <div id="webcrumbs">
      <div>
        <main className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">
            Escolha seu Personagem
          </h2>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {personagens.map((character) => (
              <CharacterSeleCard
                character={character}
              ></CharacterSeleCard>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300 flex items-center hover:shadow-lg hover:shadow-indigo-700/50 transform hover:-translate-y-1">
              <span className="material-symbols-outlined mr-2">add</span>
              Criar Novo Personagem
            </button>
            <button className="px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors duration-300 flex items-center hover:shadow-lg hover:shadow-purple-700/50 transform hover:-translate-y-1">
              <span className="material-symbols-outlined mr-2">download</span>
              Importar Personagem
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CharacterSelection;
