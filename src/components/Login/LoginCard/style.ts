import styled from "styled-components";

export const StyledLoginCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  gap: 0.25rem;

  .card-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #1e293b;
  }

  .card-p {
    margin: 0;
    margin-top: 4px;
    text-align: center;
    color: #475569;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  padding: 0px 24px 24px;
  flex-direction: column;
  gap: 1rem;

  .form-container {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    padding-top: 0;
  }

  .input-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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
    position: relative;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    left: 0.75rem;
    top: 50%;
    height: 1rem;
    width: 1rem;
    transform: translateY(-50%);
    position: absolute;
    color: #94a3b8;
  }

  .form-input {
    padding: 8px 12px 8px 40px;
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
    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .form-button {
    width: 100%;
    color: #fff;
    border: none;
    margin: 16px 0 0;
    font-size: 14px;
    border-radius: 5px;
    padding: 12px 16px;
    background-image: linear-gradient(to right, #2563eb, #475569);
    &:hover {
      background-image: linear-gradient(to right, #1d4ed8, #334155);
    }
    &:disabled {
      background-image: linear-gradient(to right, #7188c2, #7a8398);
    }
  }

  .alert {
    border: 1px solid #fecaca;
    background-color: #fef2f2;
    padding: 16px;
    border-radius: 5px;
    margin: 16px 0 0;
    color: #b91c1c;
  }

  .alert-p {
    margin: 0;
    font-size: 14px;
  }
`;
