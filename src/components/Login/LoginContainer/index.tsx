import { StyledLoginContainer } from "./style";
import LoginIcons from "../LoginIcons";
import { LoginForm } from "../LoginForm";
import GenericCard from "../../SharedComponents/LoginRegisterCard";

const LoginContainer = () => {
  return (
    <StyledLoginContainer>
      <LoginIcons />
      <GenericCard
        title="Entrar"
        paragraph="Acesse sua conta para continuar"
        children={<LoginForm />}
      />
    </StyledLoginContainer>
  );
};

export default LoginContainer;
