import styled from "styled-components";

export const StyledRegisterInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

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

  svg {
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
`;
