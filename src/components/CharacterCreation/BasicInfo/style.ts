import styled from "styled-components";

export const StyledBIContainer = styled.div`
  display: flex;
  flex-direction: column;

  .img-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .img-container {
    position: relative;
  }

  .img-card {
    position: relative;
    display: flex;
    height: 6rem;
    width: 6rem;
    flex-shrink: 0;
    overflow: hidden;
    align-items: center;
    border: 4px solid #517fffff;
    justify-content: center;
    border-radius: 9999px;
  }

  .image {
    height: 6rem;
  }

  .img-button {
    position: absolute;
    bottom: -0.3rem;
    right: -0.3rem;
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 9999px;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background: rgba(243, 244, 246, 0.67);
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px #517fffff, 0 0 0 4px #fff;
      outline: none;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    & svg {
      pointer-events: none;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
  }

  .char-name {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .name-label {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.25;
    margin-top: 16px;
  }

  .name-input {
    margin-top: 8px;
    padding: 8px 12px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid #e4e4e7;
  }

  .char-race-class {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .char-race,
  .char-class {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .select {
    margin-top: 8px;
    padding: 8px 12px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid #e4e4e7;
  }
`;
