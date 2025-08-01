import { Lock, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IResponse } from "../../../context/generalContext/interface";
import axios from "axios";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 200));

    try {
      const response: IResponse = await axios.post(
        "http://af-laravel-api.test/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        nav("/charSele");
      }
    } catch (err) {
      setError("Usuário ou senha incorretos");
    }
    setIsLoading(false);
  };
  return (
    <StyledLoginForm>
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

      <div>
        <p className="card-p">
          Ainda não tem conta?{" "}
          <span
            className="span-reg"
            onClick={() => {
              nav("/register");
            }}
          >
            Registrar
          </span>
        </p>
      </div>
    </StyledLoginForm>
  );
};
