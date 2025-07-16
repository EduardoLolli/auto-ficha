import styled from "styled-components";

export const CSHeader = styled.div`
  background: linear-gradient(to right, #1e293b, #1e40af);
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  .CSHeader-container {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .user-icon-circle {
    padding: 8px 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 9999px;
  }

  .user-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    padding: 2px 0 2px 0;
  }

  .paragraph {
    font-size: 0.875rem;
    color: #e2e8f0;
    margin: 0;
    padding: 3px 0 2px 0;
  }

  .exit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13.333px;
    font-weight: bold;
    color: white;
    background: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .logout-icon {
    margin-right: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
`;
