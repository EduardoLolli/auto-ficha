import styled from "styled-components";

export const StyledInventory = styled.div`
  background: linear-gradient(
    to bottom right,
    #0f172a,
    #1e293b 50%,
    #0f172a 100%
  );
  padding: 2rem;
  min-height: 100vh;

  .inv-container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
  }

  .inv-title {
    font-size: 2.25rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    color: rgb(157, 220, 247);
  }

  .inv-global {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .inv-char-body {
    grid-column: span 1;
    background-color: rgba(30, 41, 59, 0.5);
    border-radius: 0.75rem;
    padding: 1.5rem;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(51, 65, 85, 0.5);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    @media (min-width: 1024px) {
      grid-column: span 2;
    }
  }

  .char-body-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .flex-cont {
    flex: 1;
  }

  
`;
