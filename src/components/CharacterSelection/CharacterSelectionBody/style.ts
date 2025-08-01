import styled from "styled-components";

export const ChSelectionBody = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  .title-container {
    margin-bottom: 32px;
    @media (max-width: 1024px) {
      text-align: center;
    }
  }
  .title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .parag {
    color: #475569;
    margin: 0;
    line-height: 25px;
  }

  .Ch-card-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
