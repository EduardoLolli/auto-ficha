import React from "react";
import GenericHeader from "../GeneralComponents/homeHeader";
import { StyledInventory } from "./style";
import CharacterBaseInfo from "./CharacterBaseInfo";
import CharBodyItems from "./CharBodyItems";

const CharacterInventory: React.FC = () => {
  return (
    <StyledInventory className=" ">
      <GenericHeader />

      <div className="inv-container">
        <h1 className="inv-title">Inventário de Personagem</h1>

        <div className="inv-global">
          <div className="inv-char-body">
            <div className="char-body-container">
              <CharacterBaseInfo />
              <CharBodyItems />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-primary-300 flex items-center">
              <span className="material-symbols-outlined mr-2">
                inventory_2
              </span>
              Inventário
            </h3>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1500930837254-64a75e2a13e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBwb3Rpb258ZW58MHx8fHwxNzQ4NjI1NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Poção de Vida"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-green-400">Poção de Vida</p>
                  <p className="text-sm text-slate-400">Quantidade: 15</p>
                </div>
                <span className="text-yellow-400 font-semibold">50g</span>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1626960915725-aa98d9258d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtYW5hJTIwcG90aW9ufGVufDB8fHx8MTc0ODYyNTY1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Poção de Mana"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-blue-400">Poção de Mana</p>
                  <p className="text-sm text-slate-400">Quantidade: 8</p>
                </div>
                <span className="text-yellow-400 font-semibold">75g</span>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://img.icons8.com/color/48/scroll.png"
                  alt="Pergaminho"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-purple-400">
                    Pergaminho de Fogo
                  </p>
                  <p className="text-sm text-slate-400">Quantidade: 3</p>
                </div>
                <span className="text-yellow-400 font-semibold">200g</span>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://img.icons8.com/color/48/diamond.png"
                  alt="Gema"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-cyan-400">Diamante Místico</p>
                  <p className="text-sm text-slate-400">Quantidade: 1</p>
                </div>
                <span className="text-yellow-400 font-semibold">1500g</span>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://img.icons8.com/color/48/bread.png"
                  alt="Pão"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-orange-400">Pão Élfico</p>
                  <p className="text-sm text-slate-400">Quantidade: 25</p>
                </div>
                <span className="text-yellow-400 font-semibold">5g</span>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
                <img
                  src="https://img.icons8.com/color/48/key.png"
                  alt="Chave"
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-cont">
                  <p className="font-medium text-yellow-400">Chave Dourada</p>
                  <p className="text-sm text-slate-400">Quantidade: 2</p>
                </div>
                <span className="text-yellow-400 font-semibold">300g</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-600">
              <div className="flex justify-between items-center p-3 bg-primary-900/30 rounded-lg border border-primary-500/30">
                <span className="font-semibold text-primary-300">
                  Ouro Total:
                </span>
                <span className="text-2xl font-bold text-yellow-400">
                  2,847g
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:scale-105">
                Usar Item
              </button>
              <button className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Vender
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Next: "Add character stats panel with strength, dexterity, intelligence attributes" */}
    </StyledInventory>
  );
};

export default CharacterInventory;
