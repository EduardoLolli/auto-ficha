import { useContext } from "react";
import { AutoFichaContext } from "../../context/generalContext";
import NavigationNav from "../navigationNav";
import NavigationOption from "../navigationOption";
import { useNavigate } from "react-router-dom";

const CharacterNavigation = () => {
  const navigation = useNavigate();
  const { character } = useContext(AutoFichaContext);

  const characterInfo = character?.personagem;
  return (
    <div className="w-64 bg-gray-900 bg-opacity-80 rounded-lg mr-6 overflow-hidden border-2 border-indigo-700 backdrop-blur-sm">
      <div className="p-5 bg-indigo-800 border-b-2 border-indigo-900">
        <div className="flex items-center">
          <img
            src="https://pm1.aminoapps.com/7147/428efb63b5961cc5bb6f312239ef1242a2c2dcc1r1-564-612v2_hq.jpg"
            alt="Thorne"
            className="w-16 h-16 object-cover rounded-full border-2 border-amber-500"
          />
          <div className="ml-3">
            <h3 className="text-xl font-bold text-white">
              {characterInfo?.nome.split(" ")[0]}
            </h3>
            <p className="text-indigo-200">{characterInfo?.classe}</p>
          </div>
        </div>
        <div className="mt-3 bg-indigo-900 bg-opacity-60 rounded-lg p-2">
          <div className="flex justify-between text-xs text-indigo-100 mb-1">
            <span>HP</span>
            <span>?/{characterInfo?.hp}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full w-full"></div>
          </div>
        </div>
        <div className="mt-2 bg-indigo-900 bg-opacity-60 rounded-lg p-2">
          <div className="flex justify-between text-xs text-indigo-100 mb-1">
            <span>Experiência</span>
            <span>659/{characterInfo?.experiencia}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full "></div>
          </div>
        </div>
      </div>

      <NavigationNav>
        <NavigationOption
          icon="description"
          onClick={() => {
            navigation("/biografia");
          }}
          title="Biografia"
        />
        <NavigationOption
          icon="person"
          onClick={() => {
            navigation("/ficha");
          }}
          title="Ficha"
        />
        <NavigationOption
          icon="backpack"
          onClick={() => {
            navigation("/mochila");
          }}
          title="Mochila"
        />
        <NavigationOption
          icon="auto_fix_high"
          onClick={() => {
            navigation("/grimoire");
          }}
          title="Feitiços"
        />
        <NavigationOption
          icon="fitness_center"
          onClick={() => {
            navigation("/skills");
          }}
          title="Habilidades"
        />
      </NavigationNav>

      <div className="mt-auto p-4 border-t border-indigo-800">
        <button className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center space-x-2 group">
          <span className="material-symbols-outlined group-hover:animate-pulse">
            military_tech
          </span>
          <span>Missões</span>
        </button>
      </div>
    </div>
  );
};
export default CharacterNavigation;
