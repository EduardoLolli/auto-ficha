import { Plus } from "lucide-react";
import React from "react";
import { NChCard } from "./style";
import { useNavigate } from "react-router-dom";

const NewCharacterCard: React.FC = () => {
  const nav = useNavigate();
  return (
    <NChCard>
      <div className="nch-content">
        <div className="icon-cont">
          <Plus className="h-8 w-8 text-slate-600" />
        </div>
        <h3 className="nch-title">Criar Novo Personagem</h3>
        <p className="nch-p">Adicione um novo aventureiro à sua coleção</p>
        <button
          className="nch-button"
          onClick={() => {
            nav("/createChar");
          }}
        >
          Criar Personagem
        </button>
      </div>
    </NChCard>
  );
};

export default NewCharacterCard;
