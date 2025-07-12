import React from "react";

import {
  Crown,
  Shield,
  Shirt,
  Sword,
  Glasses,
  Hand,
  Circle,
  Footprints,
  Gem,
} from "lucide-react";

export interface EquippedItem {
  id: string;
  icon: React.ReactNode;
  // Add other properties if needed
}

interface EquipmentSlotProps {
  slot: string;
  item: EquippedItem | null;
}

const EquipmentSlot: React.FC<EquipmentSlotProps> = ({ slot, item }) => {
  const slotIcons: Record<string, React.ReactNode> = {
    accessory: <Glasses />,
    head: <Crown />,
    chest: <Shirt />,
    secondary_hand: <Shield />,
    main_hand: <Sword />,
    hands: <Hand />,
    left_ring: <Circle />,
    right_ring: <Gem />,
    feets: <Footprints />,
  };

  const empty = slotIcons[slot] || <Crown />;

  return (
    <div className={`slot-item `}>
      {item ? (
        <span className="text-gray-500 text-sm">{item?.id}</span>
      ) : (
        <div className="icons-empty">{empty}</div>
      )}
    </div>
  );
};

export default EquipmentSlot;
