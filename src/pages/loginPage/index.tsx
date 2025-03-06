import StyledLoginPage from "../../styles/components/loginPage";
import AutoFichaIcon from "../../components/autoFichaIcon";
import FeetNav from "../../components/paginaDeLogin/feetNav";
import LoginForm from "../../components/paginaDeLogin/loginForm";
import "./style.css";

const LoginPage = () => {
  return (
    <StyledLoginPage id="webcrumbs">
      <div className="login-page-container">
        <AutoFichaIcon />
        <LoginForm />
        <FeetNav />
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
