import StyledLoginPage from "../../styles/components/loginPage";
import FeetNav from "../../components/loginComponents/feetNav";
import LoginForm from "../../components/loginComponents/loginForm";
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
