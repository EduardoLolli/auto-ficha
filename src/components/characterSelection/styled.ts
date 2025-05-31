import styled from "styled-components";

export const CharacterSelectionContainer = styled.div`
  padding: 2rem;
  background: linear-gradient(to bottom right, #125e5a, #154e62);
  min-height: 100vh;
  font-family: "Inter", "Helvetica", "Arial", sans-serif;
  color: #fff;

  .char-select-body {
    margin-bottom: 2.5rem; /* mb-10 */

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
    }

    .title-p {
      text-align: center;
      font-weight: 600;
      color: #d1d5db;
      margin-bottom: 2rem;
    }
  }

  .cards-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 1.5rem;
  }
`;
