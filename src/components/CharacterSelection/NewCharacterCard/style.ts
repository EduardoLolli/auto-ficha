import styled from "styled-components";

export const NChCard = styled.div`
  border: 2px dashed #64748b;
  padding: 32px;
  border-radius: 6px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
  background-color: rgba(248, 250, 252, 0.5);
  backdrop-filter: blur(0.5rem);

  .nch-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
  }

  .icon-cont {
    padding: 1rem;
    background-color: #cbd5e1;
    border-radius: 9999px;
    margin-bottom: 1rem;
  }

  .nch-title {
    font-weight: 600;
    color: #334155;
    margin-bottom: 0.5rem;
  }

  .nch-p {
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 1rem;
  }

  .nch-button {
    padding: 8px 16px;
    border: 1px solid #94a3b8;
    border-radius: 6px;
    color: #475569;
    &:hover {
      color: black;
      background-color: #e2e8f0;
      cursor: pointer;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    background-color: transparent;
  }
`;
