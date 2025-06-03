import React from "react";
import { IbodyItem } from "../../../context/generalContext/interface";

interface CharBodyItemsCardProps {
  item: IbodyItem;
}

const CharBodyItemsCard: React.FC<CharBodyItemsCardProps> = ({ item }) => {

  return (
    <div className="char-info-card cursor-pointer group">
      <img
        src={item.sprite_url}
        alt="main_hand"
        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default CharBodyItemsCard;
