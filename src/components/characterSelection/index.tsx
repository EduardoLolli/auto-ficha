import CharacterSeleCard from "../characterSeleCard";
import "./style.css";

const personagens = [
	        {
	          name: "Eldrin",
	          class: "Mago",
	          level: 8,
	          image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "auto_fix_high",
	          stats: {
	            força: 25,
	            agilidade: 40,
	            inteligência: 95,
	            constituição: 30,
	            sabedoria: 85,
	            carisma: 60
	          }
	        },
	        {
	          name: "Thorne",
	          class: "Guerreiro",
	          level: 9,
	          image: "https://images.unsplash.com/photo-1565316151047-153c2e5c0925?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "shield",
	          stats: {
	            força: 90,
	            agilidade: 65,
	            inteligência: 40,
	            constituição: 85,
	            sabedoria: 45,
	            carisma: 50
	          }
	        },
	        {
	          name: "Lyra",
	          class: "Arqueira",
	          level: 7,
	          image: "https://images.unsplash.com/photo-1614813651404-f3ece3f6cc89?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "arrow_outward",
	          stats: {
	            força: 60,
	            agilidade: 95,
	            inteligência: 55,
	            constituição: 45,
	            sabedoria: 65,
	            carisma: 70
	          }
	        },
	        {
	          name: "Grimm",
	          class: "Bárbaro",
	          level: 8,
	          image: "https://images.unsplash.com/photo-1566582170255-4fc7a577f10a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "fitness_center",
	          stats: {
	            força: 95,
	            agilidade: 50,
	            inteligência: 25,
	            constituição: 90,
	            sabedoria: 30,
	            carisma: 35
	          }
	        },
	        {
	          name: "Seraphina",
	          class: "Sacerdotisa",
	          level: 6,
	          image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "psychiatry",
	          stats: {
	            força: 30,
	            agilidade: 45,
	            inteligência: 75,
	            constituição: 40,
	            sabedoria: 90,
	            carisma: 85
	          }
	        },
	        {
	          name: "Raven",
	          class: "Ladina",
	          level: 7,
	          image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	          icon: "vpn_key",
	          stats: {
	            força: 45,
	            agilidade: 90,
	            inteligência: 60,
	            constituição: 35,
	            sabedoria: 50,
	            carisma: 75
	          }
	        }
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
