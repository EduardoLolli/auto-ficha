import StyledLoginPage from "../../styles/components/loginPage";
import FeetNav from "../../components/login/feetNav";
import LoginForm from "../../components/login/loginForm";
import "./style.css";

const LoginPage = () => {
  return (
    <StyledLoginPage id="webcrumbs">
      <div className="login-page-container">
        <LoginForm />
        <FeetNav />
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
