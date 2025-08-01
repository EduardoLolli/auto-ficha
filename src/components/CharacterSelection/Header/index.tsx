import { CSHeader } from "./style";
import { User } from "lucide-react";
import { HeaderContainer } from "../../SharedComponents/Header/style";
import LogoutButton from "../../SharedComponents/LogoutButton";

export default function CharSeleHeader() {
  return (
    <HeaderContainer>
      <CSHeader>
        <div className="CSHeader-container">
          <div className="title-container">
            <div className="user-icon-circle">
              <User className="user-icon" />
            </div>
            <div>
              <h1 className="title">Bem vindo, {"TesteUser"}!</h1>
              <p className="paragraph">
                Selecione um personagem para continuar
              </p>
            </div>
          </div>
          <LogoutButton />
        </div>
      </CSHeader>
    </HeaderContainer>
  );
}
