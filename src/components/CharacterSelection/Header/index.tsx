import React from "react";
import { CSHeader } from "./style";
import { LogOut, User } from "lucide-react";

export default function CharSeleHeader() {
  return (
    <CSHeader>
      <div className="CSHeader-container">
        <div className="title-container">
          <div className="user-icon-circle">
            <User className="user-icon" />
          </div>
          <div>
            <h1 className="title">Bem-vindo, {"TesteUser"}!</h1>
            <p className="paragraph">
              Selecione um personagem para continuar
            </p>
          </div>
        </div>
        <button className="exit-button">
          <LogOut className="logout-icon" />
          Sair
        </button>
      </div>
    </CSHeader>
  );
}
