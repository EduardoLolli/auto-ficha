import React, { useState } from "react";
import { CardHeader, LoginForm, StyledLoginCard } from "./style";
import { Lock, User } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 500));

    await axios
      .post("http://af-laravel-api.test/api/auth/login", {
        email,
        password,
      })
      .then(
      nav('/char')

      )
      .catch((error) => {
        setError("Usuário ou senha incorretos");
      });

    setIsLoading(false);
  };

  return (
    <StyledLoginCard>
      <CardHeader>
        <h3 className="card-title">Entrar</h3>
        <p className="card-p">Acesse sua conta para continuar</p>
      </CardHeader>
      <div className="form-container">
        <LoginForm>
          <div className="input-section">
            <label htmlFor="username" className="form-label">
              Usuário
            </label>
            <div className="input-con">
              <User className="icon" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="input-section">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <div className="input-con">
              <Lock className="icon" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="form-input"
                required
              />
            </div>
          </div>

          {error && (
            <div className="alert">
              <p className="alert-p">{error}</p>
            </div>
          )}

          <button
            onClick={(e) => handleSubmit(e)}
            className="form-button"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </LoginForm>
      </div>
    </StyledLoginCard>
  );
};

export default LoginCard;
