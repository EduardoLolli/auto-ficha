import { StyledLoginContainer } from "./style";
import LoginIcons from "../LoginIcons";
import LoginCard from "../LoginCard";

const LoginContainer = () => {
  return (
    <StyledLoginContainer>
      <LoginIcons />
      <LoginCard />
    </StyledLoginContainer>
  );
};

export default LoginContainer;
