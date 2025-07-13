import LoginContainer from "../../components/Login/LoginContainer";
import LoginHeader from "../../components/Login/LoginHeader";
import { StyledLogin } from "./style";

const LoginPage = () => {
  return (
    <StyledLogin>
      <LoginHeader/>
      <LoginContainer/>
    </StyledLogin>
  );
};

export default LoginPage;
