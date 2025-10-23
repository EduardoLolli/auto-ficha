import StyledLoginPage from "../../styles/components/loginPage";
import FeetNav from "../../components/auth/feetNav";
import LoginForm from "../../components/auth";

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
