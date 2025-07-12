import React from "react";

import { StyledEquipmentSection } from "./style";
import { CharBodyItems } from "../../../pages/Inventory";
import EquipmentSlot from "../EquipmentSlot";

const EquipmentSectionN = (charBodyItems: CharBodyItems) => {
  return (
    <StyledEquipmentSection>
      {/* Personagem Visual */}
      <div className="equipment-card">
        <div className="card-header">
          <div className="card-title">Equipamentos Atuais</div>
          <div className="card-descrip">
            Clique nos slots para equipar/desequipar itens
          </div>
        </div>

        <div className="layout-container">
          {/* Layout do Personagem */}
          <div className="body-items">
            {/* Cabeça */}
            <div className="items-layout">
              <EquipmentSlot slot="accessory" item={charBodyItems?.accessory} />
              <EquipmentSlot slot="head" item={charBodyItems?.head} />
              <EquipmentSlot slot="hands" item={charBodyItems?.hands} />
            </div>

            {/* Linha Superior: Acessório, Peito, Mão Secundária */}
            <div className="items-layout">
              <EquipmentSlot slot="main_hand" item={charBodyItems?.main_hand} />
              <EquipmentSlot slot="chest" item={charBodyItems?.chest} />
              <EquipmentSlot
                slot="secondary_hand"
                item={charBodyItems?.secondary_hand}
              />
            </div>

            {/* Linha do Meio: Mão Principal e Mãos */}
            <div className="items-layout">
              <EquipmentSlot slot="left_ring" item={charBodyItems?.left_ring} />
              <EquipmentSlot slot="feets" item={charBodyItems?.feets} />
              <EquipmentSlot
                slot="right_ring"
                item={charBodyItems?.right_ring}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledEquipmentSection>
  );
};

export default EquipmentSectionN;
