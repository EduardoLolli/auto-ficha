import { Coins, Weight } from "lucide-react";
import { StyledEquipmentSection } from "../EquipmentSection/style";
import { CharBagDetails, InventoryItem } from "../../../pages/Inventory";
import InventoryItemRow from "../InventoryItemRow";

function InventorySectionN({
  inventoryItems,
  charBagDetails,
}: {
  inventoryItems: InventoryItem[];
  charBagDetails: CharBagDetails;
}) {
  console.log(charBagDetails);
  return (
    <StyledEquipmentSection>
      <div className="equipment-card">
        <div className="inv-header">
          <div>
            <div className="inv-title">Mochila do Aventureiro</div>
            <div className="inv-descrip">
              {inventoryItems?.length} itens • {}/{charBagDetails?.weight} kg
            </div>
          </div>
          <div className="inv-icons">
            <div className="inv-coin-div">
              <Coins className="inv-coin" />
              <span className="inv-span">{charBagDetails?.money}</span>
            </div>
            <div className="inv-peso-div">
              <Weight className="inv-peso" />
              <span className="inv-kg">{} kg</span>
            </div>
          </div>
        </div>

        <div className="inv-content">
          {/* Lista de Itens */}
          <div className="item-space">
            {inventoryItems?.map((item) => (
              <InventoryItemRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </StyledEquipmentSection>
  );
}

export default InventorySectionN;
