import "./style.css";

const personagens = [
  {
    name: "Eldrin",
    class: "Mago",
    level: 8,
    image:
      "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "auto_fix_high",
  },
  {
    name: "Thorne",
    class: "Guerreiro",
    level: 9,
    image:
      "https://images.unsplash.com/photo-1565316151047-153c2e5c0925?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "shield",
  },
  {
    name: "Lyra",
    class: "Arqueira",
    level: 7,
    image:
      "https://images.unsplash.com/photo-1614813651404-f3ece3f6cc89?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "arrow_outward",
  },
  {
    name: "Grimm",
    class: "Bárbaro",
    level: 8,
    image:
      "https://images.unsplash.com/photo-1566582170255-4fc7a577f10a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "fitness_center",
  },
  {
    name: "Seraphina",
    class: "Sacerdotisa",
    level: 6,
    image:
      "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "psychiatry",
  },
  {
    name: "Raven",
    class: "Ladina",
    level: 7,
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    icon: "vpn_key",
  },
];

const CharacterSelection = () => {
  return (
    <div id='webcrumbs'>
      <div className='h-[800px] bg-neutral-900 font-sans p-0 relative overflow-hidden flex flex-col'>
        

        <main className='relative z-20 flex flex-col items-center flex-grow overflow-auto px-3 sm:px-6 py-6 sm:py-8 bg-neutral-950'>
          <h2 className='text-xl sm:text-2xl font-medium text-neutral-100 mb-6 sm:mb-8'>
            Escolha seu Personagem
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full'>
            {personagens.map((character, index) => (
              <div
                key={index}
                className='bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-primary-900/20 transition-all duration-300 group'
              >
                <div className='h-40 relative overflow-hidden'>
                  <div className='absolute top-0 right-0 m-2 bg-primary-600 text-neutral-100 rounded-full py-1 px-2 text-xs font-medium z-10'>
                    Nível {character.level}
                  </div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className='w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent'></div>
                  <div className='absolute bottom-0 left-0 p-3 flex items-center'>
                    <div className='bg-primary-600 text-neutral-100 rounded-full p-2 mr-2 shadow-lg transform group-hover:rotate-12 transition-transform duration-300'>
                      <span className='material-symbols-outlined text-lg'>
                        {character.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className='text-lg font-medium text-neutral-100'>
                        {character.name}
                      </h3>
                      <p className='text-neutral-300 text-sm'>
                        {character.class}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='p-4'>
                  <div className='space-y-3 mb-4'>
                    <div>
                      <div className='flex justify-between text-xs text-neutral-400 mb-1'>
                        <span>Força</span>
                        <span>{Math.floor(30 + Math.random() * 50)}%</span>
                      </div>
                      <div className='w-full bg-neutral-700 rounded-full h-1'>
                        <div
                          className='bg-primary-500 h-1 rounded-full'
                          style={{ width: `${30 + Math.random() * 50}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-xs text-neutral-400 mb-1'>
                        <span>Agilidade</span>
                        <span>{Math.floor(30 + Math.random() * 50)}%</span>
                      </div>
                      <div className='w-full bg-neutral-700 rounded-full h-1'>
                        <div
                          className='bg-primary-500 h-1 rounded-full'
                          style={{ width: `${30 + Math.random() * 50}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between text-xs text-neutral-400 mb-1'>
                        <span>Inteligência</span>
                        <span>{Math.floor(30 + Math.random() * 50)}%</span>
                      </div>
                      <div className='w-full bg-neutral-700 rounded-full h-1'>
                        <div
                          className='bg-primary-500 h-1 rounded-full'
                          style={{ width: `${30 + Math.random() * 50}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button className='mt-2 w-full py-2 bg-neutral-700 text-primary-400 rounded-full hover:bg-primary-600 hover:text-neutral-100 transition-colors duration-300 flex items-center justify-center space-x-2 font-medium'>
                    <span>Selecionar</span>
                    <span className='material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform'>
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full px-3 sm:px-0'>
            <button className='px-4 sm:px-6 py-3 bg-primary-600 text-neutral-100 rounded-full shadow-md hover:shadow-lg hover:bg-primary-500 transition-all duration-300 flex items-center justify-center'>
              <span className='material-symbols-outlined mr-2'>add</span>
              Criar Novo Personagem
            </button>
            <button className='px-4 sm:px-6 py-3 bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-full shadow-sm hover:shadow hover:bg-neutral-700 transition-all duration-300 flex items-center justify-center'>
              <span className='material-symbols-outlined mr-2'>download</span>
              Importar Personagem
            </button>
          </div>
        </main>

        <footer className='relative p-4 flex flex-col sm:flex-row justify-between items-center text-neutral-400 border-t border-neutral-700 bg-neutral-800 z-30 mt-auto'>
          <div className='mb-3 sm:mb-0'>
            <p className='text-sm'>MysticRealms RPG v2.4.1</p>
          </div>
          <div className='flex'>
            <button className='px-3 sm:px-4 py-2 text-neutral-500 hover:text-primary-400 transition-colors'>
              Suporte
            </button>
            <button className='px-3 sm:px-4 py-2 text-neutral-500 hover:text-primary-400 transition-colors'>
              Comunidade
            </button>
            <button className='px-3 sm:px-4 py-2 text-neutral-500 hover:text-primary-400 transition-colors'>
              Fórum
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CharacterSelection;
