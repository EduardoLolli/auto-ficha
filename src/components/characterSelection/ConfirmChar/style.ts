import styled from "styled-components";

export const StyledConfirmChar = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  .confirm-container {
    background-color: rgba(23, 37, 84, 0.9);
    backdrop-filter: blur(4px);
    border: 1px solid #1e3a8a;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.18);

    .confirm-div {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      @media (min-width: 640px) {
        flex-direction: row;
      }
    }

    .confirm-button {
      background-color: #2563eb;
      &:hover {
        background-color: #1d4ed8;
      }
      color: #fff;
      padding: 0.5rem 2rem;
      border-radius: 0.5rem;
      font-size: 1.125rem;
      font-weight: 600;
      transition: background-color 0.2s;
      border: none;
      cursor: pointer;
    }

    .cancel-button {
      border: 1px solid #2563eb;
      color: #d1d5db;
      &:hover {
        background-color: #b53131;
      }
      padding: 0.5rem 2rem;
      border-radius: 0.5rem;
      font-size: 1.125rem;
      font-weight: 600;
      transition: background-color 0.2s;
      background: #701f1f;
      cursor: pointer;
    }
  }
`;
