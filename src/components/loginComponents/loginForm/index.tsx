import StyledLoginForm from "../../../styles/components/loginPage/loginForm";
import LoginFormButton from "../loginFormButton";
import LoginFormFooter from "../loginFormFooter";
import LoginFormLabel from "../loginFormLabel";
import FormHeader from "../loginHeader";
import RememberLogin from "../rememberLogin";

const LoginForm = () => {
  return (
    <StyledLoginForm className="login-form">
      <div className="login-form-container">
        <FormHeader />

        <form>
          <LoginFormLabel
            inputId="usuario"
            labelName="Nome de usuário"
            placeH="Digite o nome do seu herói"
            tipo="text"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </LoginFormLabel>
          <LoginFormLabel
            inputId="password"
            labelName="Senha"
            placeH="Digite sua runa secreta"
            tipo="password"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </LoginFormLabel>

          <RememberLogin />

          <div>
            <LoginFormButton buttonText="COMECE A AVENTURA"></LoginFormButton>
          </div>
        </form>

        <LoginFormFooter />
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
