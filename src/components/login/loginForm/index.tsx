import axios from "axios";
import StyledLoginForm from "../../../styles/components/loginPage/loginForm";
import StyledLoginFormLabel from "../../../styles/components/loginPage/loginFormLabel";
import LoginFormFooter from "../loginFormFooter";
import FormHeader from "../loginHeader";
import RememberLogin from "../rememberLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://af-laravel-api.test/api/auth/login", formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userName", response.data.name);
        console.log(response.data);
        nav("/home");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <StyledLoginForm className="login-form">
      <div className="login-form-container">
        <FormHeader />

        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <StyledLoginFormLabel>
            <div>
              <label>Nome de usuário</label>

              <div className="relative">
                <div className="svg-div">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => handleChange(e)}
                  id="email"
                  type="email"
                  placeholder="Digite o nome do seu herói"
                />
              </div>
            </div>
          </StyledLoginFormLabel>
          <StyledLoginFormLabel>
            <div>
              <label>Senha</label>

              <div className="relative">
                <div className="svg-div">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => handleChange(e)}
                  id="password"
                  type="password"
                  placeholder="Digite sua runa secreta"
                />
              </div>
            </div>
          </StyledLoginFormLabel>

          <RememberLogin />

          <div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg"
            >
              <strong>COMECE A AVENTURA</strong>
            </button>
          </div>
        </form>

        <LoginFormFooter />
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
