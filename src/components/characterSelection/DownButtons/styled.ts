import styled from "styled-components";

export const StyledDownButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: linear-gradient(to right,rgb(6, 142, 167), #07b3d1);
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 1.125rem;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: rgba(79, 41, 151, 0.5);
    }
  }
`;
