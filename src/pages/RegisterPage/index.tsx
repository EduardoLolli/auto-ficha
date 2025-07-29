import React from "react";
import { StyledLogin } from "../loginPage/style";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginIcons from "../../components/Login/LoginIcons";
import GenericCard from "../../components/SharedComponents/LoginRegisterCard";
import RegisterCard from "../../components/Register/RegisterCard";

const RegisterPage: React.FC = () => {
  return (
    <StyledLogin>
      <LoginHeader />
      <div className="page-div">
        <LoginIcons />
        <GenericCard
          title="Registrar"
          paragraph="Crie uma nova conta para começar"
          children={<RegisterCard></RegisterCard>}
        />
      </div>
    </StyledLogin>
  );
};

export default RegisterPage;
