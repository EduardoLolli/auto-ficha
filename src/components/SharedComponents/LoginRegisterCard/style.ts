import styled from "styled-components";

export const StyledGenericCard = styled.div`
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
