import React from "react";
import { BodyContainer } from "./style";
import CCCard from "../Card";
import CCBasicInfo from "../BasicInfo";
import DiceIcon from "../../../icons/dice";
import HeartIcon from "../../../icons/Heart";
import UserIcon from "../../../icons/user";
import BookIcon from "../../../icons/book";
import Attributes from "../Attributes";
import InitialStats from "../InitialStats";
import CharHistory from "../CharHistory";
import ConfirmButton from "../ConfirmButton";

const CCBody: React.FC = () => {
  return (
    <BodyContainer>
      <CCCard
        icon={<UserIcon />}
        title="Informações Básicas"
        children={<CCBasicInfo />}
      />
      <CCCard icon={<DiceIcon />} title="Atributos" children={<Attributes />} />
      <CCCard
        icon={<HeartIcon />}
        title="Estatísticas Iniciais"
        children={<InitialStats />}
      />
      <CCCard
        icon={<BookIcon />}
        title="História do Personagem"
        children={<CharHistory />}
      />
      <div>
        <ConfirmButton />
      </div>
    </BodyContainer>
  );
};

export default CCBody;
