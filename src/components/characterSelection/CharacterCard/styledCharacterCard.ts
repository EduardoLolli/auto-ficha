import styled from "styled-components";

export const StyledCharacterCard = styled.div`
  width: 350px;
  background-color: #18404c;
  border-radius: 2rem;
  padding: 1.5rem;
  border: 1px rgba(5, 150, 104, 0.73);
  transition: all 0.2s;
  box-shadow: 0 10px 20px 0 rgba(138, 92, 246, 0.03);
  cursor: pointer;
  backdrop-filter: blur(4px);

  &:hover {
    border-color: rgb(6, 68, 48);
    box-shadow: 0 12px 24px 0 rgba(10, 179, 125, 0.18);
  }
  .primary-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  .character-title {
    font-size: 1.25rem;
    font-weight: 700;
  }
  .info-container {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .info-text {
    color: #9ca3af;
  }
  .chr-selec-button {
    padding: 0.25rem 0.75rem;
    align-items: right;
    border-radius: 9999px;
    background-color: #059669;
    transition: all 0.2s;
    font-size: 0.875rem;
    color: #fff;
    &:hover {
      background-color: rgb(5, 119, 83);
    }
  }
`;
