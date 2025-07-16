import { Crown } from "lucide-react";
import React from "react";
import { StyledChSlCard } from "./style";

const CharacterCard = () => {
  return (
    <StyledChSlCard>
      <div className="pb-4">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-20 h-20 border-4 border-slate-200">
            <img />
            <div className="text-lg bg-slate-100 text-slate-600"></div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg text-slate-800"></h3>
            <p className="text-sm text-slate-600"></p>
          </div>
        </div>
      </div>
      <div className="pt-0">
        <div className="space-y-4">
          {/* Level Badge */}
          <div className="flex items-center justify-center gap-2">
            <Crown className="h-4 w-4 text-yellow-500" />
            <div className="bg-yellow-100 text-yellow-800">Nível</div>
          </div>

          {/* Class Icon */}
          <div className="flex justify-center">
            <div className="p-3 bg-slate-100 rounded-full">
              <div className="h-6 w-6 text-slate-600" />
            </div>
          </div>

          {/* HP Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">Vida</span>
              <span className="text-sm text-slate-600"></span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300
                )}`}
                style={{ width: `%` }}
              />
            </div>
          </div>

          {/* Select Button */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700">
            Selecionar Personagem
          </button>
        </div>
      </div>
    </StyledChSlCard>
  );
};

export default CharacterCard;
