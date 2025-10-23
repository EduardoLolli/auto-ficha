import styled from "styled-components";

export const LoginCard = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: rgba(15, 23, 42, 0.8); /* Slate-900/80 */
  border-radius: 0.5rem; /* 8px */
  padding: 32px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;

  .loginFooter {
    margin-top: 1.5rem;
    text-align: center;

    @media (min-width: 640px) {
      margin-top: 2rem; /* mt-8 */
    }

    p {
      font-size: 0.75rem;
      color: rgba(191, 219, 254, 0.8);
    }

    @media (min-width: 640px) {
      p {
        font-size: 0.875rem;
      }
    }

    a {
      margin-left: 0.25rem;
      color: #fbbf24;
      font-size: inherit;
      transition: color 0.2s ease-in-out;
      text-decoration: none;
    }

    a:hover {
      color: #fcd34d;
      text-decoration: underline;
    }
  }
  .cardHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;

    h2 {
      color: #f59e0b;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: 0.05em;

      @media (min-width: 640px) {
        font-size: 1.875rem;
      }
    }

    p {
      color: rgba(191, 219, 254, 0.8);
      font-size: 0.75rem;

      @media (min-width: 640px) {
        font-size: 0.875rem;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    color: #fde68a; /* Cor âmbar clara */
    font-size: 0.75rem; /* 12px */
    font-weight: 500;
    margin: 4px 0;
    margin-left: 0.25rem; /* 4px */
    @media (min-width: 640px) {
      margin: 8px 0;
      font-size: 0.875rem; /* 14px, aplicado em telas sm (mínimo 640px) */
    }
  }
`;

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  padding-left: 0.9rem; /* 10px */
  padding-right: 0.75rem; /* 3px */
  padding-top: 0.625rem; /* 2.5 */
  padding-bottom: 0.625rem; /* 2.5 */
  border: 1px solid #475569; /* Slate-600 */
  border-radius: 18px;
  background-color: rgba(30, 41, 59, 0.8); /* Slate-800/80 */
  color: #bfdbfe; /* Blue-100 */
  font-size: 0.875rem; /* 14px */
  transition: all 200ms ease-in-out;
`;

/* Helper / error text */
export const Info = styled.span`
  font-size: 12px;
  color: #64748b;
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: #ef4444;
`;

/* Action row */
export const Actions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  align-items: center;
`;

/* Button */
export const Button = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: background 120ms ease, opacity 120ms ease, transform 80ms ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.56;
    cursor: not-allowed;
    transform: none;
  }
`;

/* Small link */
export const LinkButton = styled.button`
  background: transparent;
  border: none;
  color: #4f46e5;
  padding: 6px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;
`;

export const RememberLogin = styled("div")`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; 

  div {
    display: flex;
    align-items: center;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0; /
  }

  input {
    height: 1rem; 
    width: 1rem; 
    border-radius: 0.25rem; 
    border: 1px solid #475569; 
    background-color: #334155; 
    color: #f59e0b; 
    outline: none; 
  }

  input:focus {
    box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.5); 
  }

  label {
    margin-left: 0.5rem; 
    display: block; 
    font-size: 0.75rem; 

    @media (min-width: 640px) {
      font-size: 0.875rem; 
    }

    color: #bfdbfe; 
  }

  a {
    font-size: 0.75rem; 
    color: #fbbf24; 
    transition: color 0.2s ease-in-out; 
    text-decoration: none; 
  }

  @media (min-width: 640px) {
    a {
      font-size: 0.875rem; 
    }
  }

  a:hover {
    color: #fcd34d; 
    text-decoration: underline; 
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(2, 6, 23, 0.06);
  font-size: 0.875rem;
  font-weight: 500;
  color: #0f172a;
  background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
  cursor: pointer;
  transition: all 200ms ease;
  transform: translateY(0);
  -webkit-appearance: none;

  @media (min-width: 640px) {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  &:hover {
    background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
    transform: translateY(-0.125rem);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.25);
  }

  &:disabled {
    opacity: 0.56;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;
