import styled from "styled-components";

export const StyledLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13.333px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .logout-icon {
    margin-right: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
`;
