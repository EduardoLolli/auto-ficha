import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  padding: 0px 24px 24px;
  flex-direction: column;
  gap: 1rem;
  .form-label {
    color: #334155;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    .cursor-not-allowed {
      cursor: not-allowed;
    }
    .opacity-70 {
      opacity: 0.7;
    }
  }

  .input-con {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    gap: 0.5rem;
  }
  .StyledCardHeader {
    padding-bottom: 1rem;
    padding: 24px;
    & > h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      color: #1e293b;
    }
    & > p {
      margin: 0;
      margin-top: 4px;
      text-align: center;
      color: #475569;
    }
  }
  .register-select {
    padding: 8px 12px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e4e4e7;
    font-size: 0.874rem;
    display: flex;
    height: 2.5rem;
    background-color: #fff;
    box-sizing: border-box;
    font-size: 1rem;
    outline: none;
    transition: box-shadow 0.2s;

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px #6473d3, 0 0 0 4px #fff;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  .StyledCardContent {
    padding: 0 24px 24px 24px;
  }

  .inf-inputs {
    display: flex;
    gap: 1rem;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

export const RegisterButton = styled.button`
  border: none;
  width: 100%;
  background: linear-gradient(to right, #2563eb, #475569);
  &:hover {
    background: linear-gradient(to right, #1d4ed8, #334155);
  }
  color: white;
  font-size: 1.125rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-in-out;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoginLinkWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  & p {
    color: #cbd5e1; /* slate-300 */
    font-size: 0.875rem; /* text-sm */
  }
`;

export const LoginLinkButton = styled.button`
  color: #60a5fa; /* blue-400 */
  &:hover {
    color: #93c5fd; /* blue-300 */
  }
  padding: 0;
`;
