export interface InventoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  weight: number;
  type: string;
  quantity: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | string;
  // quantity?: number;
}

interface InventoryItemRowProps {
  item: InventoryItem;
}

export default function InventoryItemRow({ item }: InventoryItemRowProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Comum":
        return "common-icon";
      case "Incomum":
        return "uncommon-icon";
      case "Raro":
        return "rare-icon";
      case "Épico":
        return "epic-icon";
      case "Lendário":
        return "legendary-icon";
      default:
        return "default-icon";
    }
  };

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case "Comum":
        return "common";
      case "Incomum":
        return "uncommon";
      case "Raro":
        return "rare";
      case "Épico":
        return "epic";
      case "Lendário":
        return "legendary";
      default:
        return "default";
    }
  };
  return (
    <div className={`item-row ${getRarityColor(item.rarity)}`}>
      <div className="item-row-div">
        {/* Ícone */}
        <div className={`item-row-icon-div ${getRarityColor(item.rarity)}`}>
          <div className="item-row-icon">{item.icon}</div>
        </div>
        {/* Informações */}
        <div className="item-row-inf">
          <div className="item-inf">
            <h3 className={`name-font ${getRarityTextColor(item.rarity)}`}>
              {item.name}
            </h3>
            <div className="item-peso">
              <span className="item-peso-text">{item.weight} kg</span>
              {item.quantity > 1 && (
                <div className="item-qnt">
                  x{item.quantity}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-blue-300">{item.type}</span>
            <span className={`text-xs ${getRarityTextColor(item.rarity)}`}>
              {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
