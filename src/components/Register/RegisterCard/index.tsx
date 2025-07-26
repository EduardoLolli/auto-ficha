import React from "react";
import { StyledCard, StyledRegisterForm } from "./style";
import { Calendar, Lock, Mail, User } from "lucide-react";

const RegisterCard: React.FC = () => {
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <StyledRegisterForm>
      <div>
        <label htmlFor="username">Usuário</label>
        <div>
          <div></div>
          <input id="usuario" type="usuario" placeholder="seu " required />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <div>
          <div></div>
          <input
            id="email"
            type="email"
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="fullName">Nome Completo</label>
        <div>
          <div></div>
          <input
            id="fullName"
            type="text"
            placeholder="Seu nome e sobrenome"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <div>
          <div></div>
          <input
            id="password"
            type="password"
            placeholder="Crie sua senha"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <div>
          <div></div>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            required
          />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="dateOfBirth">Data de Nascimento</label>
          <div>
            <div></div>
            <input id="dateOfBirth" type="date" required />
          </div>
        </div>
        <div>
          <label htmlFor="gender">Gênero</label>
        </div>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registrando..." : "Registrar"}
      </button>
    </StyledRegisterForm>
  );
};

export default RegisterCard;
