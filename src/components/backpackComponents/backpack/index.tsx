import StyledBackpack from "../../../styles/components/homePage/backpack";
import './style.css'
const Backpack = () => {
  return (
      <StyledBackpack id="webcrumbs">
        <div className="h-[768px] bg-gradient-to-br from-gray-900 to-gray-800 p-8 font-fantasy text-white overflow-hidden">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-amber-400 mb-2 tracking-wider">
              RPG Inventory System
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center bg-gray-700 bg-opacity-50 px-4 py-2 rounded-lg border border-amber-500">
                <span className="material-symbols-outlined text-amber-400 mr-2">
                  payments
                </span>
                <span className="text-xl">Gold: 1,245</span>
              </div>
              <div className="flex items-center bg-gray-700 bg-opacity-50 px-4 py-2 rounded-lg border border-amber-500">
                <span className="material-symbols-outlined text-amber-400 mr-2">
                  weight
                </span>
                <span className="text-xl">Weight: 34/100</span>
              </div>
            </div>
          </header>

          <div className="flex flex-col md:flex-row h-[600px] gap-6">
            <div className="w-full md:w-1/3 bg-gray-800 bg-opacity-70 rounded-lg border-2 border-amber-600 shadow-lg p-4 transition-all duration-300 hover:shadow-amber-600/30 mb-4 md:mb-0 max-h-[300px] md:max-h-full overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 text-amber-400 border-b border-amber-500 pb-2">
                Character
              </h2>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-700 rounded-full border-4 border-amber-500 mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1570129476815-ba368ac98da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="Character avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Aerith Stormbreaker</h3>
                <p className="text-amber-300 mb-4">Level 28 Mage</p>

                <div className="w-full space-y-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base">Strength</span>
                    <div className="w-24 md:w-32 bg-gray-700 rounded-full h-2 ml-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base">Agility</span>
                    <div className="w-24 md:w-32 bg-gray-700 rounded-full h-2 ml-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base">Intelligence</span>
                    <div className="w-24 md:w-32 bg-gray-700 rounded-full h-2 ml-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base">Stamina</span>
                    <div className="w-24 md:w-32 bg-gray-700 rounded-full h-2 ml-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-gray-800 bg-opacity-70 rounded-lg border-2 border-amber-600 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-amber-600/30 flex flex-col z-10">
              <div className="h-14 bg-gradient-to-r from-amber-700 to-amber-900 flex items-center px-2 md:px-4 overflow-x-auto">
                <ul className="flex space-x-1 w-full min-w-max">
                  <li className="px-2 md:px-4 py-2 bg-gray-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-gray-700 text-sm md:text-base whitespace-nowrap">
                    All Items
                  </li>
                  <li className="px-2 md:px-4 py-2 bg-amber-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-amber-700 text-sm md:text-base whitespace-nowrap">
                    Weapons
                  </li>
                  <li className="px-2 md:px-4 py-2 bg-gray-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-gray-700 text-sm md:text-base whitespace-nowrap">
                    Armor
                  </li>
                  <li className="px-2 md:px-4 py-2 bg-gray-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-gray-700 text-sm md:text-base whitespace-nowrap">
                    Potions
                  </li>
                  <li className="px-2 md:px-4 py-2 bg-gray-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-gray-700 text-sm md:text-base whitespace-nowrap">
                    Materials
                  </li>
                  <li className="px-2 md:px-4 py-2 bg-gray-800 rounded-t-lg border-t border-l border-r border-amber-500 cursor-pointer transition-all hover:bg-gray-700 text-sm md:text-base whitespace-nowrap">
                    Quest Items
                  </li>
                </ul>
              </div>

              <div className="p-4 flex-grow overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 max-h-[280px] md:max-h-[536px]">
                <div className="bg-gray-700 p-2 rounded border border-amber-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-amber-400 group relative">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-amber-400 group-hover:animate-pulse">
                      swords
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Fire Sword</h4>
                    <p className="text-xs text-amber-300">+25 ATK</p>
                  </div>

                  <div className="absolute -right-1 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <span className="material-symbols-outlined text-amber-400 text-sm hover:text-amber-300">
                      info
                    </span>
                  </div>

                  <div className="absolute inset-x-0 top-full mt-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    <div className="bg-gray-800 p-3 rounded shadow-lg border border-amber-500 text-left w-48">
                      <h5 className="font-bold text-sm text-amber-400 mb-1">
                        Fire Sword
                      </h5>
                      <p className="text-xs mb-2">
                        Uma espada mágica forjada nas chamas eternas.
                      </p>
                      <div className="flex justify-between text-xs">
                        <span>
                          Ataque: <span className="text-amber-300">+25</span>
                        </span>
                        <span>
                          Peso: <span className="text-amber-300">2.5kg</span>
                        </span>
                      </div>
                      <div className="mt-1 text-xs">
                        <span>
                          Efeito:{" "}
                          <span className="text-amber-300">
                            15% chance de causar dano de fogo
                          </span>
                        </span>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-amber-400">Raro</span>
                        <span className="text-xs">Durabilidade: 85/100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-amber-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-amber-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-blue-400">
                      bolt
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Lightning Staff
                    </h4>
                    <p className="text-xs text-amber-300">+32 MAG</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-green-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-green-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-green-400">
                      shield
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Dragon Shield
                    </h4>
                    <p className="text-xs text-green-300">+18 DEF</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-red-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-red-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-red-400">
                      medication_liquid
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Health Potion
                    </h4>
                    <p className="text-xs text-red-300">+150 HP</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-blue-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-blue-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-blue-400">
                      water_drop
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Mana Potion
                    </h4>
                    <p className="text-xs text-blue-300">+75 MP</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-purple-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-purple-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-purple-400">
                      diamond
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Mystic Gem</h4>
                    <p className="text-xs text-purple-300">Rare</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-yellow-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-yellow-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-yellow-400">
                      nutrition
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Golden Apple
                    </h4>
                    <p className="text-xs text-yellow-300">+10 All Stats</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-amber-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-amber-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-amber-400">
                      hiking
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">
                      Leather Boots
                    </h4>
                    <p className="text-xs text-amber-300">+12 Speed</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-gray-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-gray-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-gray-400">
                      local_fire_department
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Iron Ore</h4>
                    <p className="text-xs text-gray-300">Crafting</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-green-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-green-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-green-400">
                      eco
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Herbs</h4>
                    <p className="text-xs text-green-300">Crafting</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-amber-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-amber-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-amber-400">
                      school
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Wizard Hat</h4>
                    <p className="text-xs text-amber-300">+15 INT</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-2 rounded border border-purple-500 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:bg-gray-600 hover:border-purple-400">
                  <div className="h-12 md:h-16 flex justify-center items-center">
                    <span className="material-symbols-outlined text-2xl md:text-3xl text-purple-400">
                      book
                    </span>
                  </div>
                  <div className="text-center mt-1">
                    <h4 className="font-bold text-xs md:text-sm">Spell Book</h4>
                    <p className="text-xs text-purple-300">Quest Item</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-4 flex flex-wrap justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              <button className="px-4 md:px-6 py-2 bg-amber-600 rounded-lg font-bold transition-all hover:bg-amber-500 transform hover:-translate-y-1 text-sm md:text-base">
                <span className="material-symbols-outlined mr-1 align-middle">
                  sort
                </span>
                Sort Items
              </button>
              <button className="px-4 md:px-6 py-2 bg-amber-600 rounded-lg font-bold transition-all hover:bg-amber-500 transform hover:-translate-y-1 text-sm md:text-base">
                <span className="material-symbols-outlined mr-1 align-middle">
                  cleaning_services
                </span>
                Clean Inventory
              </button>
            </div>
            <div>
              <button className="px-4 md:px-6 py-2 bg-green-600 rounded-lg font-bold transition-all hover:bg-green-500 transform hover:-translate-y-1 text-sm md:text-base">
                <span className="material-symbols-outlined mr-1 align-middle">
                  sell
                </span>
                Visit Shop
              </button>
            </div>
          </footer>
        </div>
      </StyledBackpack>
  );
};

export default Backpack;
