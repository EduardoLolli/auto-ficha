import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, LoginButton, LoginCard, LoginInput, RememberLogin } from "./styled";

const LoginForm = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(import.meta.env.VITE_API_URL + '/api/auth/v1/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        nav("/home");
      })
      .catch(() => {
      });
  };

  return (
    <LoginCard>
      <div className="cardHeader">
        <h2>A AVENTURA AGUARDA</h2>
        <p>Digite suas credenciais para continuar sua aventura</p>
      </div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nome de usuário</label>
          <LoginInput
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Digite o nome do seu herói"
          />
        </div>
        <div>
          <label>Senha</label>
          <LoginInput
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Digite sua runa secreta"
          />
        </div>

        <RememberLogin>
          <div>
            <input id="remember-me" type="checkbox" />
            <label htmlFor="remember-me">Lembre-se dos meus feitos</label>
          </div>
          <a href="#">Perdeu seu pergaminho?</a>
        </RememberLogin>
        <LoginButton
          type="submit"
          className=""
        >
          <strong>COMECE A AVENTURA</strong>
        </LoginButton>
      </Form>

      <div className="loginFooter">
        <p>
          Novo no reino?
          <a href="#">Crie seu herói</a>
        </p>
      </div>
    </LoginCard>
  );
};

export default LoginForm;
