import styled from "styled-components";

export const StyledCharSelePage = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f172a, #1e3a8a, #0f172a);
  color: white;

  .char-sele-header {
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      to right,
      rgba(35, 75, 177, 0.2),
      rgba(58, 111, 247, 0.2)
    );
    backdrop-filter: blur(4px);
    border-bottom: 1px solid rgba(59, 130, 246, 0.2);

    .char-header-background {
      position: absolute;
      inset: 0;
      background-image: url("src/assets/placeholder.svg?height=400&width=1920");
      opacity: 0.1;
      background-size: cover;
      background-position: center;
    }

    .char-header-div {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
    }

    .char-header-title-div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .char-header-title {
      font-size: 1.875rem;
      font-weight: bold;
      color: white;

      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }
    .char-header-p {
      font-size: 1.25rem;
      color: #d1d5db;
      max-width: 42rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .char-containers {
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .char-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }


    .selected-card {
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.25),
      0 4px 6px -4px rgba(59, 130, 246, 0.25);
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .hover-card {
    &:hover {
      border-color: rgba(59, 130, 246, 0.5);
    }
  }
`;
