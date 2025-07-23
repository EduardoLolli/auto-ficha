import styled from "styled-components";

export const StyledAttributesSection = styled.div`
  .attributes-section {
    margin-bottom: 1rem;
    text-align: center;
  }

  .attributes-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .attributes {
    text-align: center;
    padding: 1rem;
    background-color: #f8fafc;
    border-radius: 0.5rem;
    border: 1px solid #cbd5e1;
  }
`;
