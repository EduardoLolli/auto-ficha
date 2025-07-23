import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 16px;
  display: grid;
  gap: 24px;
  border: 1px solid #2e2e2eff;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
  }
`;
