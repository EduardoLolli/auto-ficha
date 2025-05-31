import { StyledCharBody } from "./style";
import helmetIcon from "../../../assets/character_icons/helmet_icon_bg.png";

const CharBodyItems = () => {
  return (
    <StyledCharBody>
      <h3 className="char-title">Equipamentos</h3>

      {/* 
        'head',
        'character_id',
        'main_hand',
        'secondary_hand',
        'hands',
        'right_ring',
        'left_ring',
        'chest',
        'feets',
        'accessory', */}

      <div className="char-info-container">
        <div className="char-info-card cursor-pointer group">
          <img
            src="https://img.icons8.com/color/48/sword.png"
            alt="main_hand"
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="char-info-card cursor-pointer group">
          <img
            src={helmetIcon}
            alt="head"
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="char-info-card cursor-pointer group">
          <img
            src="https://img.icons8.com/color/48/shield.png"
            alt="secondary_hand"
            className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="char-info-card cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1479156731157-e883d1bd10d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjaGVzdCUyMGFybW9yfGVufDB8fHx8MTc0ODYyNTU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Armadura"
            className="w-10 h-10"
          />
        </div>

        <div className="col-span-3 flex justify-center">
          <div className="char-info-card cursor-pointer group">
            <img
              src="https://img.icons8.com/color/48/boots.png"
              alt="Botas"
              className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* <div className="col-span-3 flex justify-center space-x-4"> */}
        <div className="char-info-card cursor-pointer group">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxyaW5nfGVufDB8fHx8MTc0ODYyNTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Anel"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="char-info-card cursor-pointer group">
          <img
            src="https://img.icons8.com/color/48/necklace.png"
            alt="Colar"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      {/* </div> */}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
          <span className="material-symbols-outlined text-red-400">
            favorite
          </span>
          <span className="ml-2 text-red-400 font-semibold">HP: 850/1000</span>
        </div>
        <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
          <span className="material-symbols-outlined text-blue-400">
            psychology
          </span>
          <span className="ml-2 text-blue-400 font-semibold">MP: 320/500</span>
        </div>
      </div>
    </StyledCharBody>
  );
};

export default CharBodyItems;
