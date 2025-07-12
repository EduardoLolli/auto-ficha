import type React from "react";

import { useState, useEffect, useContext } from "react";
import { Package } from "lucide-react";
import GeneralHeader from "../../components/GeneralComponents/Header";
import { StyledInventory } from "./style";
import EquipmentSectionN from "../../components/CharacterInventory/EquipmentSection";
import InventorySectionN from "../../components/CharacterInventory/InventorySection";
import axios from "axios";
import { AutoFichaContext } from "../../context/generalContext";

export interface CharBagDetails {
  money: number;
  weight: number;
}

export interface CharBodyItems {
  id: number;
  accessory: InventoryItem | null;
  chest: InventoryItem | null;
  feets: InventoryItem | null;
  hands: InventoryItem | null;
  head: InventoryItem | null;
  left_ring: InventoryItem | null;
  main_hand: InventoryItem | null;
  right_ring: InventoryItem | null;
  secondary_hand: InventoryItem | null;
}

export interface ICompleteItems {
  charBagDetails: CharBagDetails;
  charBodyItems: CharBodyItems;
  inventoryItems: InventoryItem[];
  ok: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  type: string;
  icon: React.ReactNode;
  stats?: { [key: string]: number };
}

export default function InventoryPage() {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [charBodyItems, setCharBodyItems] = useState<CharBodyItems>();
  const [charBagDetails, setCharBagDetails] = useState<CharBagDetails>();
  const { setLoading } = useContext(AutoFichaContext);

  useEffect(() => {
    setLoading(true);
    const fetchInventoryItems = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token não encontrado no localStorage.");
          return;
        }
        const response = await axios.get(
          "http://af-laravel-api.test/api/character/loadcharbody/1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCharBodyItems(response.data.charBodyItems);
        setInventoryItems(response.data.inventoryItems);
        setCharBagDetails(response.data.charBagDetails);
      } catch (error) {
        console.error("Erro ao buscar itens do inventário:", error);
      }
    };

    fetchInventoryItems();
    setLoading(false);
  }, []);

  return (
    <StyledInventory>
      <GeneralHeader />
      <div className="inventory-container">
        {/* Header */}
        <div className="inventory-header">
          <div className="inventory-icon-div">
            <Package className="inventory-icon" />
          </div>
          <h1 className="inventory-title">Inventário do Aventureiro</h1>
          <p className="inventory-p">Gerencie seus equipamentos e itens</p>
        </div>

        {/* Tabs para Mobile/Tablet */}

        {/* Layout lado a lado para Desktop */}
        <div className="desktop-layout">
          <EquipmentSectionN {...(charBodyItems ?? {})} />
          <InventorySectionN
            inventoryItems={inventoryItems}
            charBagDetails={charBagDetails}
          />
        </div>
      </div>
    </StyledInventory>
  );
}
