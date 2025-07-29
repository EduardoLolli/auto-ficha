import React from "react";
import { StyledRegisterInput } from "./style";

export interface IRegisterInputs {
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  required?: boolean;
  name: string;
  type: string;
  setInfo: (value: string) => void;
}

const RegisterInputs: React.FC<IRegisterInputs> = ({
  label,
  icon,
  placeholder,
  name,
  required,
  type,
  setInfo,
}) => {
  return (
    <StyledRegisterInput className="input-section">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="input-con">
        {icon}
        <input
          className="form-input"
          id={name}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>
    </StyledRegisterInput>
  );
};

export default RegisterInputs;
