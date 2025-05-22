import StyledRememberLogin from "../../../styles/components/loginPage/rememberLogin";

const RememberLogin = () => {
  return (
    <StyledRememberLogin>
      <div className="flex items-center">
        <input id="remember-me" type="checkbox" />
        <label htmlFor="remember-me">Lembre-se dos meus feitos</label>
      </div>
      <a href="#">Perdeu seu pergaminho?</a>
    </StyledRememberLogin>
  );
};

export default RememberLogin;
