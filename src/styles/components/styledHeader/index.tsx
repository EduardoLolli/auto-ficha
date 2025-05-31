import styled from "styled-components";

const StyledHeader = styled("header")`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-title {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;

    .span-f {
      color: #34d399;
    }
    .span-s {
      font-size: 1rem;
      margin-left: 0.5rem;
      opacity: 0.7;
    }
  }
  .buttons-cont {
    display: flex;
    gap: 1rem;

    .help-button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #3f3f46;
      transition: all 0.2s;
      transform: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #52525b;
        transform: scale(1.05);
      }
    }
    .settings-button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #3f3f46;
      transition: all 0.2s;
      transform: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #52525b;
        transform: scale(1.05);
      }
    }
  }
`;

export default StyledHeader;
