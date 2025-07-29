import React, { useState } from "react";
import { RegisterButton, StyledRegisterForm } from "./style";
import { Calendar, Lock, Mail, User } from "lucide-react";
import EmailIcon from "../../../icons/email";
import RegisterInputs from "../RegisterInputs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IResponse } from "../../../context/generalContext/interface";

const RegisterCard: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log(
      username,
      email,
      password,
      password_confirmation,
      birth_date,
      full_name,
      gender
    );
    try {
      const response: IResponse = await axios.post(
        "http://af-laravel-api.test/api/auth/register",
        {
          username: username,
          email,
          password,
          password_confirmation,
          birth_date,
          full_name,
          gender,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        nav("/charSele");
      }
    } catch (err) {
      console.log(err);
      setError("Usuário ou senha incorretos");
    }
    setIsLoading(false);
  };
  return (
    <StyledRegisterForm>
      <RegisterInputs
        setInfo={setUsername}
        name="username"
        label="Usuário"
        required={true}
        icon={<User className="icon" />}
        type="username"
        placeholder="Digite seu usuário"
      />
      <RegisterInputs
        setInfo={setEmail}
        name="email"
        label="Email"
        required={true}
        icon={<Mail className="icon" />}
        type="email"
        placeholder="Digite seu email"
      />
      <RegisterInputs
        setInfo={setFullName}
        name="fullname"
        label="Nome Completo"
        required={true}
        icon={<User className="icon" />}
        type="text"
        placeholder="Digite seu nome completo"
      />
      <RegisterInputs
        setInfo={setPassword}
        name="password"
        label="Senha"
        required={true}
        icon={<Lock className="icon" />}
        type="password"
        placeholder="Crie sua senha"
      />
      <RegisterInputs
        setInfo={setConfirmPassword}
        name="confirmPassword"
        label="Confirme sua Senha"
        required={true}
        icon={<Lock className="icon" />}
        type="password"
        placeholder="Confirme sua senha"
      />
      <div className="inf-inputs">
        <RegisterInputs
          setInfo={setBirthDate}
          name="birthDate"
          label="Data de Nascimento"
          required={true}
          icon={<Calendar className="icon" />}
          type="date"
          placeholder="Confirme sua senha"
        />
        <div className="input-con">
          <label className="form-label">Gênero</label>
          <select
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            className="register-select"
            value={gender}
          >
            <option value="" disabled>
              Selecione o gênero
            </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="N">Não Binário</option>
            <option value="P">Prefiro não informar</option>
          </select>
        </div>
      </div>

      <RegisterButton
        type="submit"
        disabled={isLoading}
        onClick={(e) => handleRegister(e)}
      >
        {isLoading ? "Registrando..." : "Registrar"}
      </RegisterButton>
    </StyledRegisterForm>
  );
};

export default RegisterCard;
