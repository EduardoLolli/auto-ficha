export interface CharBodyItems {
  accessory: IbodyItem;
  chest: IbodyItem;
  feets: IbodyItem;
  hands: IbodyItem;
  head: IbodyItem;
  id: string | number;
  left_ring: IbodyItem;
  main_hand: IbodyItem;
  right_ring: IbodyItem;
  secondary_hand: IbodyItem;
}

export interface IPersonagem {
  charBodyItems: CharBodyItems;
}

export interface IbodyItem {
  created_at: string;
  description: string;
  id: number;
  item_type: string;
  max_stack: number;
  min_level: number;
  name: string;
  rarity: string;
  sprite_url: string;
  stackable: boolean;
  updated_at: string;
  value: number;
  weight: number;
}
