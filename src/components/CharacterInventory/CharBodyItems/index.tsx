import type { CharBodyItems } from "../../../context/generalContext/interface";
import CharBodyItemsCard from "../CharBodyItemsCard";
import { StyledCharBody } from "./style";

interface CharBodyItemsProps {
  bodyitems: CharBodyItems; // Replace with a more specific type if known
}
const CharBodyItems = ({ bodyitems }: CharBodyItemsProps) => {
  console.log(bodyitems);
  return (
    <StyledCharBody>
      <h3 className="char-title">Equipamentos</h3>

      <div className="char-info-container">
        <CharBodyItemsCard item={bodyitems.accessory} />
        <CharBodyItemsCard item={bodyitems.head} />
        <CharBodyItemsCard item={bodyitems.hands} />

        <CharBodyItemsCard item={bodyitems.secondary_hand} />
        <CharBodyItemsCard item={bodyitems.chest} />
        <CharBodyItemsCard item={bodyitems.main_hand} />

        <CharBodyItemsCard item={bodyitems.left_ring} />
        <CharBodyItemsCard item={bodyitems.feets} />
        <CharBodyItemsCard item={bodyitems.right_ring} />
      </div>

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
